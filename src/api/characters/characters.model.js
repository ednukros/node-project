const mongoose = require('mongoose');

const characterSchema = new mongoose.Schema({
    "name": {
        type: String,
        required: [true, "Your character need a name"]
    },
    "height": {
        type: Number,

    },

    "weight": {
        type: Number,
    },

    "gender": {
        type: [String],
        enum: [
            'male',
            'female'
        ]


    },

    "race": {
        type: [String],
        enum: [
            'Android',
            'Angel',
            'Cerealian',
            'Core Person',
            'Demon',
            'Demon Realm Race',
            'Dragon',
            'Eternal Dragon',
            'Earthling',
            'Frieza Race',
            'Majin',
            'Namekian',
            'Saiyan',
            'Super Saiyan God',
            'Tuffle'
        ]

    },
    "temporarily-race": {
        type: String
    },
    "tournaments-won": {

    }







})

const Character = mongoose.model("characters", characterSchema);

module.exports = Character;