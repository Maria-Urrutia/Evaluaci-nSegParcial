const express = require('express');
const rutasVino= require('./rutas/rutasVino');
const rutasDulce= require('./rutas/rutasDulce');
const rutasRefresco= require('./rutas/rutasRefresco');

const app = express();

app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use('/vinos',rutasVino);
app.use('/dulce',rutasDulce);
app.use('/refresco',rutasRefresco);
module.exports = app;

 

