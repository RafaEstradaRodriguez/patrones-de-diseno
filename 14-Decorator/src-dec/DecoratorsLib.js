/*Object.defineProperty(UpflixMovie.prototype, 'getVisited', {
    writable: false
});*/

export const readonly = (target, property, descriptor) => {
    // ... Sobre quien se actua
    console.log(target);
    // ... La propiedad (funciones, propiedades de clase...)
    console.log(property);
    // ... Valores del descriptor (como cuando Object.defineProperty el PropertyDescriptor)
    console.log(descriptor);
    // ... Valor del descriptor (en el caso de funciones el código fuente de la función...)
    console.log(descriptor.value);

    descriptor.writable = false;
    return descriptor;
};

export const log = msg => {
    return (target, property, descriptor) => {
        let fnOriginal = descriptor.value;
        console.log(fnOriginal);

        let fnNueva = function(...args) {
            console.log("[UPFLIX - begin] - ", msg);
            let res = fnOriginal.apply(target, args);
            console.log("[UPFLIX - end] - ", msg);
            return res;
        }

        descriptor.value = fnNueva;

        return descriptor;
    }
}