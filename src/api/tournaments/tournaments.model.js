const mongoose = require('mongoose');

const tournamentSchema = new mongoose.Schema({
    "name": {
        type: String,
        required: [true, "Need a tournament name"]
    },
    "location":{
        type: String
    },
    "host":{
        type: String
    },
    "participants":{},
    "reward": {
        type: Number
    },
    "finished":{},
    "winner":{
        type: mongoose.Types.ObjectId,
        ref:"characters"
    }
    
})

const Tournament = mongoose.model("tournamets", tournamentSchema);

module.exports = Tournament;