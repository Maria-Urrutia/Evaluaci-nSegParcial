const express= require('express');
const ControladorRefresco = require('../controlador/ControladorRefresco');

const Router = express.Router();

Router.get('/',ControladorRefresco.index)
      .post('/',ControladorRefresco.crear)
      .get('/:key/:value',ControladorRefresco.buscar,ControladorRefresco.mostrar)
      .put('/:key/:value',ControladorRefresco.buscar,ControladorRefresco.actualizar)
      .delete('/:key/:value',ControladorRefresco.buscar,ControladorRefresco.eliminar);
module.exports = Router;