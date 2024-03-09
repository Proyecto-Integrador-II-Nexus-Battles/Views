const mongoose = require("mongoose");

const epicsSchema = mongoose.Schema({
    _id: { type: String, 
        required: true 
    },
    imagePath: { type: String, 
        required: true 
    },
    TypeCard: { type: String, 
        required: true 
    },
    Name: { type: String, 
        required: true 
    },
    Type: { type: String, 
        required: true 
    },
    Subtype: { type: String, 
        required: true 
    }, 
    //no obligatorios
    EspecialDescriptionBuff: { 
        type: Number, 
        default: null 
    },
    NormalLiveBuff: { 
        type: Number, 
        default: 0 
    },
    EspecialLiveBuff: { 
        type: Number, 
        default: 0 
    },
    EspecialDamageBuff: { 
        type: Number, 
        default: 0 
    },
    Immunity: { 
        type: Number, 
        default: 0 
    },
    NormalDamageBuff: {
        type: Number, 
        default: 0 
    },
    NormalDescriptionDebuff: { 
        type: String, 
        default: null 
    },
    EnemyDamageNerf: { 
        type: String, 
        default: null 
    },
    RoundTimer: { 
        type: Number, 
        default: 0 
    },
    EspecialReduction: {
        type: Number, 
        default: 0
    },
    EspecialImpunity: {
        Type: String
    }
})

module.exports = mongoose.model('Talents', epicsSchema, "Talents")