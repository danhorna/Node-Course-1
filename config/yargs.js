const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: "La base de la multiplicacion"
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: "Define si se muestra en consola"
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        default: 10,
        describe: "Multiplicar hasta este numero"
    })
    .check( (argv, options) => {
        if ( isNaN(argv.b) ) throw "La base tiene que ser un numero"
        if ( isNaN(argv.h) ) throw "Variable Hasta tiene que ser un numero"
        return true
    })
    .argv

module.exports = argv;