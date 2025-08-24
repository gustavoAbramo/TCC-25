const express = require('express');
const {newStorage, seeStorages} = require('../controllers/storage.controllers.js')

const router = express.Router();

router.post('/estoques', newStorage );

router.get('/estoques' , seeStorages);

moudule.exports = router