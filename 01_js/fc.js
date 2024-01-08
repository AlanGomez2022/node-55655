let cuenta = 0;

function contador(numero) {
  cuenta += numero;
}

console.log(cuenta);
contador(1);
contador(20);
contador(100);
contador(3000);
console.log(cuenta);

const concatenar = () => {
  let primera = "hola";
  let segunda = "mundo";
  console.log(primera, segunda);
};

concatenar();

const imprimir = (palabra) => console.log(palabra);

const corroborar = (arreglo) => {
  const tiposDeDatos = arreglo.map((cadaUno) => ({
    valor: cadaUno,
    tipoDeDato: typeof cadaUno,
  }));
  console.log(tiposDeDatos);
  return tiposDeDatos;
};

imprimir ('hola toga');

const resultado = corroborar([NaN,1, "hola", null, false]);
corroborar (resultado)

