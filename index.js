require('dotenv').config()
const express = require('express');
// const cors = require('cors');
const  db = require('./src/utils/db.js');

 db.connectDB();
 
//Routes imports here


const PORT = process.env.PORT;
const server = express();

//aqui vienen los uses

//req.body transform
server.use(express.json());

server.use(express.urlencoded({ extended: true}));


//server routes here

//non-existent routes will pass by this way
server.use('*', (req, res, next) => {
    return res.status(404).json('Unknow route, so sorry :(');
});

//error controller
server.use((error, req, res, next) => {

    const status = error.status || 500;
    const message = error.message || 'Ouch! Unexpected Error!';
    return res.status(status).json(message);
})

server.listen(PORT, () => {

    console.log('¡Server working!');
});