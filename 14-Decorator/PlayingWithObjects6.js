let objEjemplo = Object.create(null, {
    prop1: {
        value: "Valor de prop1 inicial",
        enumerable: true
    }
});

console.log("objEjemplo...");
console.log(objEjemplo);
console.log(objEjemplo.__proto__);

try {
    console.log(objEjemplo.hasOwnProperty("prop1"));

} catch (e) {
    console.log("ERROR: %s", e.message);
}

console.log("-----------------------------");


let objEjemplo2 = Object.create(Object.prototype, {
    prop1: {
        value: "Valor de prop1 inicial",
        enumerable: true
    }
});

console.log("objEjemplo2...");
console.log(objEjemplo2);
console.log(objEjemplo2.__proto__);
console.log("OK: %s", objEjemplo2.hasOwnProperty("prop1"));
