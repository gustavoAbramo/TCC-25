import {
  createStorageSchema,
  renameStorageSchema,
} from "../utils/storages.util.js";
import {
  createStorageService,
  seeStoragesServices,
  renameStorageService,
  deleteStorageService,
  searchStoragesAndItemsService,
} from "../services/storages.service.js";

export async function createStorage(req, res) {
  const id_user = req.user?.id_user;

  const { error, value } = createStorageSchema.validate(req.body, {
    abortEarly: false,
  });

  if (error) {
    const message = error.details[0].message;

    return res.status(400).json({
      success: false,
      message,
    });
  }

  const { name, location } = value;

  try {
    const storage = await createStorageService(name, id_user, location);
    return res.status(201).json({ success: true, storage });
  } catch (error) {
  res.status(error.statusCode || 500).json({
    success: false,
    error: error.message,
  });
}
}

export async function seeStorages(req, res) {
  try {
    const id_user = req.user?.id_user;

    const storages = await seeStoragesServices(id_user);

    res.status(200).json({ success: true, storages });
  } catch (error) {
    res.status(error.statusCode || 500).json({
      success: false,
      error: error.message,
    });
  }
}

export async function renameStorage(req, res) {
  const id_user = req.user.id_user;
  const id_Storage = parseInt(req.params.id);
  const { error, value } = renameStorageSchema.validate(req.body, {
    abortEarly: false,
  });
  if (error) {
    const message = error.details[0].message;
    return res.status(400).json({ success: false, message });
  }
  const { newName } = value;
  try {
    const updatedStorage = await renameStorageService(
      id_user,
      id_Storage,
      newName
    );

    res.status(200).json({
      success: true,
      message: "Nome do estoque atualizado com sucesso",
      storage: updatedStorage,
    });
  } catch (error) {
    res.status(403).json({
      success: false,
       error: error.message });
  }
}

export async function deleteStorage(req, res) {
  try {
    const id_user = req.user.id_user;
    const id_Storage = parseInt(req.params.id);

    // Chame o serviço para deletar o storage
    await deleteStorageService(id_user, id_Storage);

    res.status(200).json({ 
      success: true,
      message: "Estoque deletado com sucesso." });
  } catch (error) {
    res.status(403).json({
      success: false,
      error: error.message });
  }
}

export async function searchStoragesAndItems(req, res) {

  const { query } = req.body;
  if (!query || typeof query !== "string" || query.trim() === "") {
    return res.status(400).json({ message: "Query inválida" });
  }

  try {
    const results = await searchStoragesAndItemsService(req.user.id_user, query);
    return res.status(200).json({ success: true, ...results });
  } catch (error) {
    return (500).json({
      success: false,
      message: error.message
    });
  }
}
