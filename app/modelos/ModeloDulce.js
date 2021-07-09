const mongoose = require('mongoose');

const DulcesSchema = new mongoose.Schema({
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
    }

})
 const Dulce =mongoose.model('Dulce', DulcesSchema);
 module.exports =Dulce;
