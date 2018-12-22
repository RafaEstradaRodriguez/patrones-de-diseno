'use strict';

let  objEjemplo = {
    prop1: "valor de la propiedad 1",
    prop2: "valor de la propiedad 2"
}

let descriptor = Object.defineProperty(objEjemplo, "prop1", {
    writable: false,
    enumerable: true,
    configurable: false
});

console.log("Vamos a intentar escribir en la prop1...");
console.log("y vamos a obtener el error de turno...");


try {
    objEjemplo.prop1 = "Me da igual porque va a fallar";
} catch (e) {
    console.log("El error, como ya te dije, es: %s", e.message);
}

try {
    Object.defineProperty(objEjemplo, "prop1", {
        writable: true
    });
} catch (e) {
    console.log("El error, como ya te dije, es: %s", e.message);
    console.log("No podemos modificar la configuración de writable porque configurable es false");
}
