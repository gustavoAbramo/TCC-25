import { createStorageSchema } from "../utils/storages.util.js"
import { createStorageService, seeStoragesServices } from '../services/storages.service.js'

export async function createStorage(req, res) {

  try {
    const id_user = req.user?.id_user; 
    if (!id_user) return res.status(401).json({ message: "Usuário não autenticado" });

    const { name } = createStorageSchema.parse(req.body);
    const storage = await createStorageService(name, id_user);
    res.status(201).json(storage);
  } catch (err) {
    res.status(400).json({ errors: err.errors || err.message });
  }

};

export async function seeStorages (req,res){



}