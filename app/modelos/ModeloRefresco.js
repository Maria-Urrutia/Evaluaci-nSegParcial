const mongoose = require('mongoose');

const RefrescosSchema = new mongoose.Schema({
    nombre:{
        type: String,
        required: true
    },
    codigo:{
         type: Number,
         required: true
    },
    precio:{
        type: Number,
        required: true
    },
    existencia:{
        type: Number,
        default:5
    },
    fechaderegistro:{
        type: Date,
        required: true
    }

})
 const Refresco =mongoose.model('Refresco', RefrescosSchema);
 module.exports =Refresco;