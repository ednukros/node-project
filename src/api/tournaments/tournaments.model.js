const mongoose = require('mongoose');

const tournamentSchema = new mongoose.Schema({
    "name": {},
    "location":{},
    "host":{},
    "participants":{},
    "finished":{},
    "winner":{}
    
})

const Tournament = mongoose.model("tournamets", tournamentSchema);

module.exports = Tournament;