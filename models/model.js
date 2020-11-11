//Este modelo se exportará para controller, no para server.js
const mongoose = require('mongoose');

const fornitureSchema = new mongoose.Schema({
    operationType: {
        type: String
    },
    fornitureType: {
        type: String
    },
    address: {
        type: String
    },
    photos: {
        type: Boolean
    },
    environments: {
        type: String
    },
    squareMeter: {
        type: Number
    },
    description: {
        type:String
    },
    ownerData: {
        name: {
            type: String
        },
        age: {
            type: Number
        }
    }
});

module.exports = mongoose.model('Forniture', fornitureSchema);