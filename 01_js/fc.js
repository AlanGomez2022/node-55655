let cuenta = 0;

function contador(numero) {
  cuenta+=numero;
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

const corroborar = (arreglo)=>{
    const tiposDeDatos = arreglo.map (cadaUno => ( {valor: cadaUno , tipoDeDato: typeof cadaUno}))
    console.log(tiposDeDatos);
    return tiposDeDatos;
}

const resultado = corroborar ([1, "hola", null, false])
corroborar([Nan, undefined, true, imprimir, resultado])
