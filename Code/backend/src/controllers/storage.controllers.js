import { createStorageSchema } from "../utils/storages.util.js"
import { createStorageService, seeStoragesServices } from '../services/storages.service.js'

export async function createStorage(req, res) {

  try {
    const id_user = req.user?.id_user;
    const { name } = createStorageSchema.parse(req.body);

    const storage = await createStorageService(name, id_user);
    res.status(201).json(storage);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }

};

export async function seeStorages(req, res) {
  try {
    const id_user = req.user?.id_user;

    const storages = await seeStoragesServices(id_user);

    res.status(200).json(storages);
  } catch (err) {
    res.status(500).json({ message: err.message })
  }


}