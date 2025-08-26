import express from 'express'
import { beCoOwner, beGuest } from '../controllers/permission.controller.js'

const router = express.Router();

router.post('/beCoOwner', beCoOwner);

router.post('/beGuest', beGuest)

export default router;
