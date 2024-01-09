const datos = {
  nombre: " alan",
  apellido: "gomez",
  edad: 34,
};

const datosExtras = {
  ciudad: "Derqui",
  nacimiento: 1990,
};

const objetosunidos = { ...datos, ...datosExtras }; // spread operator para unir ambos arrays
console.log(objetosunidos);
