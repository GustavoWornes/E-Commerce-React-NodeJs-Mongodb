const express = require ('express')
const app= express()
const cors = require('cors')
const bodyParser = require('body-parser')

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}))

var path = require('path') /* é um caminho pro servidor */
const db = require ('../source/config/database');
const userRoutes = require('./routes/userRoutes');

db.connect();


app.engine('html',require('ejs').renderFile)
app.set('view engine','html')
app.use('/public',express.static(path.join(__dirname,'public')));
app.set('views',path.join(__dirname,'/views'))


app.use("/",userRoutes)

module.exports = app