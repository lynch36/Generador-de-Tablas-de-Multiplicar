const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');

require('colors');

console.clear();

/* console.log(argv); */

/* console.log(process.argv); */  /* SABER LOS ARGUMENTOS QUE SE RECIBEN DESDE LA CONSOLA */

crearArchivo(argv.g, argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo.rainbow, 'creada'.yellow))
    .catch(err => console.log(err));