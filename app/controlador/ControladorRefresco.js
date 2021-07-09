const ModeloRefresco = require('../modelos/ModeloRefresco');

function index(req,res) {
    console.log('ok');
    ModeloRefresco.find({})
    .then(refrescos => {
        if(refrescos.length)return res.status(200).send({refrescos});
        return res.status(204).sen({message: 'No hay datos'});

    }).catch(error => res.status(500).send({error}));
}
function crear(req,res){
    new ModeloRefresco(req.body).save()
    .then(refrescos => res.status(200).send({refrescos}))
    .catch(error => res.status(500).send({error}));
}
function buscar(req,res,next) {
    let consulta = {};
    consulta[req.params.key]=req.params.value;
    ModeloRefresco.find(consulta).then(refrescos => {
        if(!refrescos.length) return next();
        req.body.refrescos = refrescos;
        return next();
    }).catch(error => {
        req.body.error=error;
     next();
 })

}

function mostrar(req,res) {
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.refrescos) return res.status(404).send({message: 'No se encontro el producto'});
    let refrescos=req.body.refrescos;
    return res.status(200).send({refrescos}); 
}
function actualizar(req,res) {
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.refrescos) return res.status(404).send({message:'No se puede Actualizar'});
    let refrescosObj = req.body.refrescos[0];
    refrescosObj= Object.assign(refrescosObj,req.body);
    refrescosObj.save().then(refrescosAlta =>{
        res.status(200).send({message: 'El registro se actualizó correctamente',refrescosAlta});
    }).catch(error => res.status(500).send({error}));
}
function eliminar(req,res) {
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.refrescos) return res.status(404).send({message:'No se puede eliminar'});
    req.body.refrescos[0].remove().then(refrescosEliminar => {
      res.status(200).send({message: 'Eliminado correctamente', refrescosEliminar});
    }).catch(error => res.status(500).send({error}));
}

module.exports={
    index,
    crear,
    buscar,
    mostrar,
    actualizar,
    eliminar
}