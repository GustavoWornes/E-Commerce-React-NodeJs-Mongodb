const mongoose = require ('mongoose')
const userSchema = new mongoose.Schema({
    id:mongoose.Schema.Types.ObjectId,
    name:{
        type:String,
    },
    sobrenome:{
        type:String,
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
    },
    bairro:{
        type:String,
    },
    localidade:{
        type:String,
    },
    uf:{
        type:String,
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