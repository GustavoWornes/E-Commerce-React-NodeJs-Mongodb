const mongoose = require('mongoose')
/* 
const MONGODB_URI = "mongodb+srv://Adm:KzoPRZGWXvotwvsg@projetotera.lmuo1uz.mongodb.net/?retryWrites=true&w=majority" */
const MONGODB_URI = "mongodb+srv://admin:VqK8SBHEXL9umIff@cluster0.n2kzdof.mongodb.net/?retryWrites=true&w=majority"

const connect = async () => {
    try {
        await mongoose.connect(MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log("Banco conectado (:")
    } catch (error) {
        console.log("Erro: ", error.message)
    }
}

module.exports = {
    connect
}