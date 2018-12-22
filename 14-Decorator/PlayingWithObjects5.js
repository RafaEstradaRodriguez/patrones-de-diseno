'use strict';

let  objEjemplo = {
    prop1: "valor de la propiedad 1",
    prop2: "valor de la propiedad 2"
}

Object.defineProperty(objEjemplo, "prop1", {
    configurable: true,
    get: () => {
        //return `prop1: ${this.prop1}`;
        return this.prop1;
    },
    set: (value) => {
        this.prop1 = `${value} - a través de set`;
    }
});

console.log(objEjemplo.prop1);

objEjemplo.prop1 = "Nuevo valor";
console.log(objEjemplo.prop1);

console.log("Los setters y getters sobreescriben valores previos");
console.log("El valor inicial se pierde y no podemos poner writable a nuestra propiedad porque va a pasar a través de set...");