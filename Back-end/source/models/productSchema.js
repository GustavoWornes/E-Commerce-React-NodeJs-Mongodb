const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
    },
    preco: {
        type: Number
    },precoproduto: {
        type: String
    },
    cor: {
        type: String
    },
    tamanho: {
        type: Array
    },
    img_principal: { type: String },
    img_um: { type: String },
    img_dois: { type: String },
    img_tres: { type: String },
    img_quatro: { type: String },
    img_cinco: { type: String }
    ,

    terreno: { type: String },
    sistema_de_amarracao: { type: String },
    peso_aproximado: { type: String },
    impermeabilizacao: { type: String },
    drop: { type: String },
    ajuste: { type: String },
    descricao: { type: String }


})


module.exports = mongoose.model('product', productSchema)