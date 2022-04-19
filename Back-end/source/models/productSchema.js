const mongoose = require ('mongoose')

const productSchema = new mongoose.Schema({
    id:mongoose.Schema.Types.ObjectId,
    name:{
        type:String,       
    },
    preco:{
        type:Number
    },
    cor:{
        type:String
    },
    tamanho:{
        type:Array
    },
    img:{
       img_principal:{type:String}, 
       img_um:{type:String},
       img_dois:{type:String},
       img_tres:{type:String},
       img_quatro:{type:String},
       img_cinco:{type:String}
    },
    informacoes:{
        Terreno:{type:String},
        Sistema_De_Amarracao:{type:String},
        Peso_Aproximado:{type:String},
        Impermeabilizacao:{type:String},
        Drop:{type:String},
        Ajuste:{type:String},
        descricao:{type:String}
    }

})


module.exports = mongoose.model('product',productSchema)