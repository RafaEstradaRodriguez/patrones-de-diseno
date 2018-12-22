'use strict';

let objEjemplo = {
    prop1: "Valor de la propiedad 1",
    prop2: "Valor de la propiedad 2"
};

Object.defineProperty(objEjemplo, "prop3", {
    value: "Valor inicial de la prop3",
    writable: true,
    enumerable: true
});

console.log(objEjemplo);
console.log(objEjemplo.hasOwnProperty("prop3"));

Object.freeze(objEjemplo);

try {
    Object.defineProperty(objEjemplo, "prop4", {
        value: "Valor inicial de la prop4",
        writable: false,
        enumerable: true
    });
} catch (e) {
    console.log("Este objeto ha quedado cerrado a nuevas modificaciones de cualquier tipo: %s", e.message);
    console.log("No se pueden añadir propiedades, ni cambiar la configuración de las existentes");
    console.log("No podemos variar las ya existentes, obviamente");
}

try {
    objEjemplo.prop1 = "Nuevo valor para prop1";
} catch (e) {
    console.log("Intentando asignar valor a la prop1 me encuentro con: %s", e.message);
    console.log("Si no usamos el modo estricto, esto no salta aunque sigue no asignando el nuevo valor");
}





