const controller = require ('../controllers/userControllers');


const express = require ('express');
const router = express.Router();


router.get('/',controller.getall)
router.put(`/perfil/:id`,controller.putUser);
router.get(`/perfil/:id`,controller.getUser);

router.get("/product/:id",controller.getProduct)
router.post('/criarConta',controller.createUser);
router.post('/login',controller.logar)

/* router.post('/login',controller.login) */

module.exports = router;


