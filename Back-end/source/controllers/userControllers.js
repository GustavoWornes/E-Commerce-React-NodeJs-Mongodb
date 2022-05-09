const userSchema = require('../models/userSchema');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const productSchema = require('../models/productSchema')
/* Index da mensagem dizendo q a api está funcionando */

const index = (request,response) =>{
    response.render('index')
}
const login = async (request,response) =>{
    try{
        response.status(500).json({
            message:error.message
        })
    }catch(error){
        response.status(500).json({
            message:error.message
        })
    }
}
const newAccount = async (request,response) =>{
    try {
        response.render('criarConta')
    } catch (error) {
        response.status(500).json({
            message:error.message
        })
    }
}

/* Getall mostra todos usuarios registrados no momento */
const getUser = async (request,response) => {
    try{
        const user = await userSchema.findById(request.params.id)
        
        response.status(200).json(user);
    }catch (error) {
        response.status(500).json({
            message: error.message,
        })
    }
}
const putUser = async (request,response) =>{
    const hashedPassword = bcrypt.hashSync(request.body.password, 10)
    /* linha a cima gera um hash com a senha recebida no body da request  */
    request.body.password = hashedPassword
    try {
        const user = await userSchema.findById(request.params.id)
        user.name=request.body.name;
        user.sobrenome=request.body.sobrenome;
        user.email=request.body.email;
        user.password=request.body.password;
        user.cep=request.body.cep;
        user.logradouro=request.body.logradouro;
        user.bairro=request.body.bairro;
        user.localidade=request.body.localidade;
        user.uf=request.body.uf;
        user.save()
        response.status(200).json(user);
        
    } catch (error) {
        response.status(500).json({
            message: error.message,
        })
    }
}
const getProduct = async (request,response) =>{
    try{
        const product = await productSchema.findById(request.params.id)
        response.status(200).json(product);
    }catch (error) {
        response.status(500).json({
            message: error.message,
        })
    }
}
/* createUser onde é criado e armazenado o usuario */
const createUser = async(request,response) =>{
    const hashedPassword = bcrypt.hashSync(request.body.password, 10)
    /* linha a cima gera um hash com a senha recebida no body da request  */
    request.body.password = hashedPassword
 
    try {
        const newUser = new userSchema({
            _id: new mongoose.Types.ObjectId(),
            name:request.body.name,
            sobrenome:request.body.sobrenome,
            email:request.body.email,
            password:request.body.password,
            cep:request.body.cep,
            logradouro:request.body.logradouro,
            bairro:request.body.bairro,
            localidade:request.body.localidade,
            uf:request.body.uf,
            createDate:request.body.createDate
        })
 
        const savedUser = await newUser.save()

        response.status(200).json({
            message: "User adicionado com sucesso!",
            savedUser
        })
    } catch (error) {
        response.status(500).json({
            message: error.message
        })
    }
    
}

/* const login = async(request,response) =>{
    try {
        const emailLogin = userSchema.findOne({ email: request.body.email})
        
    } catch (error) {
        
    }
    
} */
const logar = async (request,response) =>{
   try {
    const loginUser = await userSchema.findOne({email:request.body.email})
    if (loginUser == null){
        var erroEmail = true
    }
    console.log(loginUser,"Este é o usuario")
    var senhateste = bcrypt.compareSync(request.body.password, loginUser.password)
    console.log(senhateste,"Verificacao se a senha é valida")
    if(senhateste == true){
        response.status(200).json(loginUser)
       
    }else{
        response.status(404).json({
            message:"Senha Invalida"
        }) 
    }
    
    
    
   } catch (error) {
    if(erroEmail == true){
        response.status(500).json({
            message: "Usuario não encontrado"
        })
    }
     
   }
}

module.exports = {
    index,
    getUser,
    createUser,
    login,
    newAccount,
    logar,
    getProduct,
    putUser
  
}

/* 
_id:new mongoose.Types.ObjectId(),
            name:request.body.name,
            sobrenome:request.body.sobrenome,
            email:request.body.email,
            password:request.body.password,
            cep:request.body.cep,
            logradouro:request.body.logradouro,
            bairro:request.body.bairro,
            localidade:request.body.localidade,
            uf:request.body.uf,
            createDate:request.body.createDate */