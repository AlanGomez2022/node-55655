const fs = require("fs");

const ruta = "./04_fs/promesas.json";
const contenido = JSON.stringify([{ title: "hp1" }], null, 2);

fs.promises
  .writeFile(ruta, contenido)
  .then((resultado) => console.log(resultado))
  .catch((error) => console.log(error));

const configuracion = "utf-8";
fs.promises
  .readFile(ruta, configuracion)
  .then((resultado) => console.log(JSON.parse(resultado)))
  .catch((error) => console.log(error));

fs.promises
  .unlink(ruta)
  .then((resultado) => console.log(resultado))
  .catch((error) => console.log(error));
