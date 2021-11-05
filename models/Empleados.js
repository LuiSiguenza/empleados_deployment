const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const empleadosSchema = new Schema({
    nombres: {
        type: String,
        trim : true
    },
    apellidos : {
        type: String,
        trim : true
    },
    tipo_documento : {
        type: String,
        trim: true
    },
    documento : {
        type: String,
        unique: true, 
        trim: true
    },
    area : {
        type: String, 
        trim: true
    },
    subarea : {
        type: String, 
        trim: true
    }
});

module.exports = mongoose.model('Empleados', empleadosSchema);