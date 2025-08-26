// src/controllers/user.controller.js
import { permissionUserSchema } from "../utils/permissions.util.js";
import { toCoOwnerService, toGuestService } from "../services/permissions.service.js";


// src/controllers/user.controller.js
export async function beCoOwner(req, res) {
    try {
        const { email, id_Storage } = permissionUserSchema.parse(req.body);
        const user = await toCoOwnerService({ email, id_Storage });

        res.status(201).json({
            message: "Você adicionou um colaborador",
            user,
        });
    } catch (error) {
        if (error.name === "ZodError") {
            return res.status(400).json({ errors: error.errors });
        }
        return res.status(400).json({ error: error.message });
    }
}

export async function beGuest(req, res) {
    try {
        const { email, id_Storage } = permissionUserSchema.parse(req.body);
        const user = await toGuestService({ email, id_Storage });

        res.status(201).json({
            message: "Você adicionou um visualizador",
            user,
        });
    } catch (error) {
        if (error.name === "ZodError") {
            return res.status(400).json({ errors: error.errors });
        }
        return res.status(400).json({ error: error.message });
    }
}