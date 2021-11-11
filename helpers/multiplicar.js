const fs = require('fs');
const crearArchivo = async(base, hasta, listar) => {
    let salida = '';

    try{
        for (let x = 0; x <= hasta; x++) {
            salida += `${base} x ${x} = ${base * x}\n`
        }
        if (listar) console.log(salida)
        fs.writeFileSync(`./outputs/tabla-${base}.txt`, salida)
        return `tabla-${base}.txt`
    }
    catch(err){
        throw err;
    }
}

module.exports = {
    crearArchivo
}