const controller = require ('../controllers/userControllers');

const { check } = require('express-validator');
const { validateInput } = require('express-validator');
const express = require ('express');
const router = express.Router();


router.get('/index',controller.index);
router.get('/login',controller.login)
router.get('/criarConta',controller.criarConta)

router.get("/all",controller.getAll);
router.get("/product/:id",controller.getProduct)
router.post('/criarConta',controller.createUser);
router.post('/login',controller.logar)

/* router.post('/login',controller.login) */

module.exports = router;


