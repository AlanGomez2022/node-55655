function elevadoa(num1, num2, funcionHandler) {
    if ((num1 || num1 === 0) && (num2 || num2 === 0)) {
      funcionHandler(null, num1 ** num2);
    } else {
      funcionHandler("faltan parametros");
    }
  }
  
  function dividir(n1, n2, funcionHandler) {
    if (n1 && n2 !== 0) {
      funcionHandler(null, n1 / n2);
    } else {
      funcionHandler("n1 no existe o n2 es 0");
    }
  }

  function calcular(n1, n2, operacion) {
    operacion(n1, n2, funcionHandler);
  }
  
  calcular(2, 5, elevadoa);
  calcular(10, 0, dividir);
  calcular(10, 2, dividir);
  