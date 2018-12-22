'use strict';

let  objEjemplo = {
    prop1: "valor de la propiedad 1",
    prop2: "valor de la propiedad 2"
}

Object.defineProperty(objEjemplo, 'prop1', {
    writable: false
});

propDescriptor = Object.getOwnPropertyDescriptor(objEjemplo, "prop1");

console.log("----------------------------------------------------");
console.log("---- Descriptor de la propiedad prop1 con la modificación ----");
console.log(propDescriptor);
console.log("----------------------------------------------------");

objEjemplo.prop1 = "Voy a intentar cmabiar el valor y me va a dar un error";