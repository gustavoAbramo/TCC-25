// src/controllers/user.controller.js
import { validateEmailUser } from "../utils/user.util.js";
import {
  toCoOwnerService,
  toGuestService,
  getPermissionsService,
} from "../services/permissions.service.js";

// src/controllers/user.controller.js
export async function beCoOwner(req, res) {
  const id_Storage = req.body.id_Storage;

  if (!id_Storage) {
    errors.push({
      field: "id_Storage",
      message: "ID do estoque é obrigatório",
    });
  }

  const { valid, errors, data } = validateEmailUser(req.body);
  if (!valid) {
    return res.status(400).json({ errors });
  }

  const { email } = data;

  try {
    const user = await toCoOwnerService({ email, id_Storage });

    res.status(201).json({
      message: "Você adicionou um colaborador",
      user,
    });
  } catch (error) {
    res.statusCode = error.status || 400;
    return res.status(res.statusCode).json({
      success: false,
      error: error.message,
    });
  }
}

export async function beGuest(req, res) {
  const id_Storage = req.body.id_Storage;
  if (!id_Storage) {
    errors.push({
      field: "id_Storage",
      message: "ID do estoque é obrigatório",
    });
  }
  const { valid, errors, data } = validateEmailUser(req.body);
  if (!valid) {
    return res.status(400).json({ errors });
  }
  const { email } = data;

  try {
    const user = await toGuestService({ email, id_Storage });

    res.status(201).json({
      message: "Você adicionou um visualizador",
      user,
    });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
}

export async function seePermissions(req, res) {
  const id_Storage = parseInt(req.params.id_Storage, 10);

  if (isNaN(id_Storage)) {
    return res.status(400).json({ error: "ID do estoque inválido" });
  }

  try {
    const permissions = await getPermissionsService({ id_Storage });
    res.status(200).json({ permissions });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
}
