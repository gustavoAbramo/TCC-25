const express = require('express');
const registerController = require('../controllers/registerController');
const router = express.Router();  

router.get('/teste', async(req, res)=>{
    data = registerController.hello()
    console.log(data)
    res.status(200).send(data)
 });

router.post('/create', registerController.criar_user)

 module.exports = router;