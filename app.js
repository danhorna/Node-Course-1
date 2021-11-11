const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');

console.clear;

// const base = 2;

crearArchivo(argv.b, argv.h, argv.l)
    .then( nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch( err => console.log(err));