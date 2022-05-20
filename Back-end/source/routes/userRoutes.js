const controller = require ('../controllers/userControllers');


const express = require ('express');
const router = express.Router();


router.get(`/perfil/:id`,controller.getUser);
router.get('/',controller.index);
router.get('/login',controller.login)
router.get('/criarConta',controller.newAccount)
router.get('/adm',controller.getall)
router.put('/adm/descricao/:id',controller.putProduct)
router.delete('/adm',controller.deleteProduct)
router.put(`/perfil/:id`,controller.putUser);
router.get("/product/:id",controller.getProduct)
router.post('/criarConta',controller.createUser);
router.post('/login',controller.logar)

/* router.post('/login',controller.login) */

module.exports = router;


