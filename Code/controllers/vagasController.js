const getVagaStatus = (req, res) => {



};
const sair_vaga = async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;

    try {
        const vaga = await prisma.vaga.update({
            where: { id: Number(id) },
            data: { status: status }
        });
        res.status(200).json(vaga);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar a vaga' });
    }
}
module.exports = { getVagaStatus };