// require('dotenv').config()
const express = require('express');
const cors = require('cors');
const db = require('./src/utils/db.js');

db.connectDB();

//Routes imports here
const indexRoutes = require("./src/api/index/index.routes");
const charactersRoutes = require("./src/api/characters/characters.routes");
const tournamentRoutes = require("./src/api/tournaments/tournaments.routes");
const usersRoutes = require("./src/api/users/user.routes");

const PORT = 8080;
const server = express();

//req.body transform
server.use(express.json());

server.use(express.urlencoded({
    extended: true
}));


//server routes here
server.use("/", indexRoutes);
server.use("/characters", charactersRoutes);
server.use("/tournaments", tournamentRoutes);
server.use("/users", usersRoutes);


// non-existent routes will pass by this way
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