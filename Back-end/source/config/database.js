const mongoose = require('mongoose')

const MONGODB_URI = "mongodb+srv://admin:UrayEu7comIC8YF2@projetotera.sntnm.mongodb.net/loja?retryWrites=true&w=majority"

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