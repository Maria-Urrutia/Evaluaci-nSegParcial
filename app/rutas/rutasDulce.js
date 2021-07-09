const express= require('express');
const ControladorDulce = require('../controlador/ControladorDulce');

const Router = express.Router();

Router.get('/',ControladorDulce.index)
      .post('/',ControladorDulce.crear)
      .get('/:key/:value',ControladorDulce.buscar,ControladorDulce.mostrar)
      .put('/:key/:value',ControladorDulce.buscar,ControladorDulce.actualizar)
      .delete('/:key/:value',ControladorDulce.buscar,ControladorDulce.eliminar);
module.exports = Router;