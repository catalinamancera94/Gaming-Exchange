const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EmpleadosSchema = new Schema({
    nombre:{type: String, required: true, max:60},
    primer_apellido:{type: String, required: true, max:40},
    segundo_apellido:{type: String, required: true, max:40},
    telefono:{type: String, required: true, max:15},
    mail:{type: String, required: false, max:70},
    
});

module.exports = mongoose.model("empleados", EmpleadosSchema);