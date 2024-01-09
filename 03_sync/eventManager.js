class EventManager {
  static #events = [];
  static #perGain = 0.3;
  static #totalGain = 0;
  constructor() {}
  createEvent({ name, place, ...data }) {
    try {
      if (!name || !place) {
        throw new Error("please insert name or place");
        //esto va a activar el CATCH que es el manejador de errores
      } else {
        const event = {
          id:
            EventManager.#events.length === 0
              ? 1
              : EventManager.#events[EventManager.#events.length - 1].id + 1,
          name, // los paso directo porque esta descruturing
          place, // los paso directo porque esta descruturing
          price: data.price || 10,
          capacity: data.capacity || 50,
          date: data.date || new Date(),
        };
        EventManager.#events.push(event); // el metodo ya reasigna el array original
        return event;
      }
    } catch (error) {
      //new Error genera un obj error con un monton de errores
      //el mensaje configurada en la linea 9 esta en la propiedad message
      return error.message;
    }
  }
  readEvents() {
    try {
      if (EventManager.#events.length === 0) {
        throw new Error("Not found events");
      } else {
        return EventManager.#events;
      }
    } catch (error) {
      return error.message;
    }
  }
  readOne(id) {
    try {
      let encontrado = EventManager.#events.find(
        (each) => each.id === Number(id)
      );
      if (encontrado) {
        return encontrado;
      } else {
        throw new Error("There is not event with these ID");
      }
    } catch (error) {
      return error.message;
    }
  }
  soldTicekt(quantity, id) {
    try {
      if (!(quantity > 0)) {
        throw new Error("insert valid qunatity");
      } else {
        const one = this.readOne(id);
        if (!(one===NaN) || quantity > one.capacity) {
          throw new Error("No more capacity or the event doesn´t exist");
        } else {
          one.capacity = one.capacity - quantity;
          EventManager.#totalGain =
            EventManager.#totalGain +
            EventManager.#perGain * quantity * one.price;
          return one.capacity;
        }
      }
    } catch (error) {
      return error.message;
    }
  }
}

const events = new EventManager();
console.log(events.readEvents());
console.log(events.createEvent({ name: "hp1", place: "derqui" }));
console.log(events.createEvent({ name: "hp2" }));
console.log(events.createEvent({ place: "derqui" }));
console.log(events.createEvent({ name: "hp3", place: "derqui" }));
console.log(events.readEvents());
console.log(events.readOne(1));
console.log(events.readOne(100));
console.log(events.soldTicekt(-2, 1));
console.log(events.soldTicekt(100, 2));
console.log(events.soldTicekt(10, 20));
