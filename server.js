const app = require('./app/app');
const CONFIG = require('./app/configuracion/config');
const morgan = require('morgan');
const conexion = require('./app/configuracion/conexion')

conexion.connect();

app.use(morgan('dev'));

app.listen(CONFIG.PORT,function(error){
    if(error) return console.log(error);
    console.log(`Servidor en el puerto ${CONFIG.PORT}`);
});


