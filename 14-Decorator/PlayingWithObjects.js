'use strict';

let  objEjemplo = {
    prop1: "valor de la propiedad 1",
    prop2: "valor de la propiedad 2"
}

console.log("---- Objeto de prueba con los valores iniciales ----");
console.log(objEjemplo);
console.log("----------------------------------------------------");

let propDescriptor = Object.getOwnPropertyDescriptor(objEjemplo, "prop1");

console.log("----------------------------------------------------");
console.log("---- Descriptor de la propiedad prop1 ----");
console.log(propDescriptor);
console.log("----------------------------------------------------");

/*
- writable: se puede modificar el valor de la propiedad del objeto
- enumerable: se lista cuando hacemos introspección del objeto
- configurable: cuando podemos cambiar la configuración de las dos anteriores
- get [opcional]: getter
- set [opcional]: setter
*/
