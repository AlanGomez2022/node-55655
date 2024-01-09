class Persona {
  constructor(nombre, apellido, edad, ciudad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.ciudada = ciudad;
    this.orden = Persona.cantidadDePersonas;
    this.agregarAlContador();
  }
  static cantidadDePersonas = 0; // propiedad de la clase!!! no depende de la persona creada. 
  static admin = "coderhouse"

  imprimir() {
    console.log(this);
  }
  imprimirNombreCompleto() {
    console.log(this.nombre, this.apellido);
  }
  agregarAlContador = () => {
    Persona.cantidadDePersonas++;
  }
  conocerAdmin = ()=>{
    console.log(Persona.admin)
  }
}

const profe = new Persona("alan", "gomez", 34, "derqui");
profe.imprimir();

const tutor = new Persona("german", "koning", 30, "cordoba");

tutor.imprimir();
profe.imprimirNombreCompleto();

console.log(Persona.cantidadDePersonas);
console.log(profe.orden)
console.log(tutor.orden);
