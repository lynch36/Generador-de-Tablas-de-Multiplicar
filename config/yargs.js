const argv = require('yargs')
    .option('g', {              /* CREAR EL ALIAS DEL ARGUMENTO */
        alias: 'generar',
        type: 'boolean',
        default: false,
        describe: 'Se crea un archivo de la tabla de multiplicar'
    })
    .option('b', {              /* CREAR EL ALIAS DEL ARGUMENTO */
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Base sobre la cual multiplicar'
    })
    .option('h', {              /* CREAR EL ALIAS DEL ARGUMENTO */
        alias: 'hasta',
        type: 'number',
        default: 10,
        describe: 'Hasta que numero se hara la multiplicacion'
    })
    .option('l', {              /* CREAR EL ALIAS DEL ARGUMENTO */
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'Listar tabla de multiplicar'
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {    /* SE VALIDA QUE EL ARGUMENTO SEA UN NUMERO */
            throw 'La base tiene que ser de valor numerico';
        }
        return true;
    })
    .argv;

module.exports = argv;