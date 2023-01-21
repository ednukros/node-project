const mongoose = require('mongoose');

const tournamentSchema = new mongoose.Schema({
    "name": {},
    
})

const Tournament = mongoose.model("tournamets", tournamentSchema);

module.exports = Tournament;