const fs = require('fs');

require('colors');

const crearArchivo = async (guardar = false, base = 0, listar = false, hasta = 10) => {
    
    try {
        let salida = '';
        let consola = '';
    
        for (let index = 1; index <= hasta; index++) {
            salida += `${base} x ${index} = ${index * base}\n`;
            consola += `${base} ${"x".red} ${index} ${"=".red} ${index*base}\n`;
        }

        if (listar) {
            console.log(consola);
        }
        
        if (guardar) {
            fs.writeFileSync(`./salida/tabla-multiplicar-${base}.txt`, salida);
            return `tabla-multiplicar-${base}.txt`;
        }
        
        return `Tabla Del ${base}`;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    crearArchivo
}