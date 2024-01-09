const fs = require('fs')

const ruta = './04_fs/callbacksfs.json'
const contenido = JSON.stringify([{title:'hp1'},{title:'hp2'},{title:'hp3'}],null,2)

// para crear el archivo o sobreescribir de manera asincrona

fs.writeFile(ruta,contenido,(error=>{
    if (error){
        console.log(error)
        return error
    }
}))

const configuracion='utf-8'
//para leer el archivo es de forma asincrona
fs.readFile(ruta,configuracion,(error,exito)=>{
    if (error){
        console.log(error)
        return error;
    }else{
        console.log(JSON.parse(exito))
        return exito
    }
})

//para eliminar el archivo de forma asincrona
fs.unlink(ruta,(error)=>{
    if (error){
        console.log(error)
        return error
    }
})