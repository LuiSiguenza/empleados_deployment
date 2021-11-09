const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const areasSchema = new Schema({
    area: {
        type: String,
        trim : true
    },
    subarea : [{
        type: String,
        trim : true
    }]
});

module.exports = mongoose.model('Areas', areasSchema);