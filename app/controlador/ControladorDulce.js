const ModeloDulce = require('../modelos/ModeloDulce');

function index(req,res) {
    console.log('ok');
    ModeloDulce.find({})
    .then(dulces => {
        if(dulces.length)return res.status(200).send({dulces});
        return res.status(204).sen({message: 'No hay datos'});

    }).catch(error => res.status(500).send({error}));
}
function crear(req,res){
    new ModeloDulce(req.body).save()
    .then(dulces => res.status(200).send({dulces}))
    .catch(error => res.status(500).send({error}));
}
function buscar(req,res,next) {
    let consulta = {};
    consulta[req.params.key]=req.params.value;
    ModeloDulce.find(consulta).then(dulces => {
        if(!dulces.length) return next();
        req.body.dulces = dulces;
        return next();
    }).catch(error => {
        req.body.error=error;
     next();
 })

}

function mostrar(req,res) {
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.dulces) return res.status(404).send({message: 'No se encontro el producto'});
    let dulces=req.body.dulces;
    return res.status(200).send({dulces}); 
}

function actualizar(req,res) {
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.dulces) return res.status(404).send({message:'No se puede Actualizar'});
    let dulcesObj = req.body.dulces[0];
    dulcesObj= Object.assign(dulcesObj,req.body);
    dulcesObj.save().then(dulcesAlta =>{
        res.status(200).send({message: 'El registro se actualizó correctamente',dulcesAlta});
    }).catch(error => res.status(500).send({error}));

}

function eliminar(req,res) {
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.dulces) return res.status(404).send({message:'No se puede eliminar'});
    req.body.dulces[0].remove().then(dulcesEliminar => {
      res.status(200).send({message: 'Eliminado correctamente', dulcesEliminar});
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