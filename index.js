const express = require('express');
const ejs = require('ejs');
const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded())
app.use(express.json())


const route = require('./routes/router')
app.use(route)









app.listen(3005,()=> console.log('server running on port 3005'))