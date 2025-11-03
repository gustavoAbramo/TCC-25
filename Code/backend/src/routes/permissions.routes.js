import express from 'express'
import { beCoOwner, beGuest, seePermissions } from '../controllers/permission.controller.js'

const router = express.Router();

router.post('/beCoOwner', beCoOwner);

router.post('/beGuest', beGuest)

router.get('/seePermissions/:id_Storage', seePermissions);

export default router;
