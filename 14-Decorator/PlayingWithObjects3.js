'use strict';

let  objEjemplo = {
    prop1: "valor de la propiedad 1",
    prop2: "valor de la propiedad 2"
}

Object.defineProperty(objEjemplo, 'prop1', {
    enumerable: false,
    value: "Vamos a poner otro valor desde la nueva asignación"
});

console.log("Ahora el valor de prop1 es: %s", objEjemplo.prop1);

let propDescriptor = Object.getOwnPropertyDescriptor(objEjemplo, "prop1");


console.log("--------------------------------------------------------------");
console.log("---- Descriptor de la propiedad prop1 con la modificación ----");
console.log(propDescriptor);
console.log("--------------------------------------------------------------");

objEjemplo.prop1 = "Voy a intentar cambiar el valor y me va a dejar";

console.log("--------------------------------------------------------------");
console.log("---- Listamos las propiedades del objeto y....            ----");

for (let i in objEjemplo) {
    console.log(i);
}
console.log("--------------------------------------------------------------");

console.log("Vemos que prop1 no sale...");
console.log("Es casi lo mismo que hacer Object.keys....");
console.log(Object.keys(objEjemplo));