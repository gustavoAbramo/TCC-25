import {prisma} from '../../prisma/client.js';

export async function generateLinkCode(req, res) {
    try {
        const userId = req.user?.id_user; // <-- CORRIGIDO

        if (!userId) {
            return res.status(400).json({ error: "userId não encontrado no token." });
        }

        const code = Math.floor(100000 + Math.random() * 900000).toString();
        const expiresAt = new Date(Date.now() + 5 * 60 * 1000);

        await prisma.alexaLinkCode.deleteMany({
            where: { userId }
        });

        await prisma.alexaLinkCode.create({
            data: { code, userId, expiresAt }
        });

        return res.json({
            code,
            expiresIn: 300,
            message: "Código gerado com sucesso!"
        });

    } catch (error) {
        console.error("Erro generateLinkCode:", error);
        return res.status(500).json({ error: "Erro ao gerar código." });
    }
}

export async function verifyCode(req, res) {
    try {
        const { code, alexaUserId } = req.body;

        if (!code) {
            return res.status(400).json({ error: "code é obrigatório." });
        }

        if (!alexaUserId) {
            return res.status(400).json({ error: "alexaUserId é obrigatório." });
        }

        const link = await prisma.alexaLinkCode.findUnique({
            where: { code }
        });

        if (!link) {
            return res.status(400).json({ error: "Código inválido." });
        }

        if (link.expiresAt < new Date()) {
            await prisma.alexaLinkCode.delete({ where: { code } });
            return res.status(401).json({ error: "Código expirado." });
        }

        await prisma.alexaLinkCode.update({
            where: { code },
            data: {
                used: true,
                alexaUserId
            }
        });

        return res.json({
            ok: true,
            userId: link.userId,
            message: "Código validado com sucesso!"
        });

    } catch (error) {
        console.error("Erro verifyCode:", error);
        return res.status(500).json({ error: "Erro ao verificar código." });
    }
}

export async function getUserProfile(req, res) {
    try {
        const userId = req.user?.id_user; 

        if (!userId) {
            return res.status(400).json({ error: "userId não encontrado no token." });
        }

        const user = await prisma.user.findUnique({
            where: { id_user: Number(userId) }
        });

        if (!user) {
            return res.status(404).json({ error: "Usuário não encontrado." });
        }

        return res.json({
            id: user.id_user,
            name: user.name,
            email: user.email
        });

    } catch (error) {
        console.error("Erro getUserProfile:", error);
        return res.status(500).json({ error: "Erro ao obter perfil do usuário." });
    }
}
