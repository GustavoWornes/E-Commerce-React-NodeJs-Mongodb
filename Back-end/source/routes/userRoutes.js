const controller = require ('../controllers/userControllers');


const express = require ('express');
const router = express.Router();


router.get(`/perfil/?:id`,controller.getUser);
router.get('/index',controller.index);
router.get('/login',controller.login)
router.get('/criarConta',controller.criarConta)


router.get("/product/:id",controller.getProduct)
router.post('/criarConta',controller.createUser);
router.post('/login',controller.logar)

/* router.post('/login',controller.login) */

module.exports = router;


