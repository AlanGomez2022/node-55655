const fs = require("fs");

const ruta = "./04_fs/tickets.json";
const datos = JSON.stringify(
  [{ title: "hp1" }, { title: "hp2", place: "derqui" }],
  null,
  2
);

//escribir un archivo sincrino
fs.writeFileSync(ruta, datos);

//leer archivo sincrono
const configuracion = 'utf-8'
console.log(JSON.parse(fs.readFileSync(ruta, configuracion)));

//eliminar un archivo de forma sincrona
console.log(fs.existsSync(ruta))
fs.unlinkSync(ruta)

//para verificar si un archivo existe
console.log(fs.existsSync(ruta))