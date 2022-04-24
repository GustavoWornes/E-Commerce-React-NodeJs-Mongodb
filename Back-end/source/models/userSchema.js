const mongoose = require ('mongoose')
const { token } = require('morgan')



const userSchema = new mongoose.Schema({
    id:mongoose.Schema.Types.ObjectId,
    name:{
        type:String,
        required:true,
        minlength:[3,'Nome muito curto'],
        maxlength:[20,"Não pode exceder 20 Caracteres"]
    },
    sobrenome:{
        type:String,
        required:true,
        minlength:5,
        maxlength:20,
        
    },
    email:{
        type:String,
        required:true,
        minlength:5,
        maxlength:50,
        unique:true
    },
    password:{
        type:String,
        required:true,
        minlength:[7,'Senha precisa ter mais de 6 Caracteres'],
      
    },
    cep:{
        type:Number,
        required:true,
        minlength:[7,'Cep necessita de pelo menos 7 digitos'],
        maxlength:10
    },
    logradouro:{
        type:String,
        require:true
    },
    bairro:{
        type:String,
        required:false
    },
    localidade:{
        type:String,
        required:false
    },
    uf:{
        type:String,
        required:false
    },
    createDate:{
        type:Date,
        default:new Date()
    },
    token:{
        type:String,
        default: new String()
    }

})



module.exports = mongoose.model('user',userSchema)