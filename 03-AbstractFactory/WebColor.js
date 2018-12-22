import Color from './Color.js';

export default class WebColor extends Color
{
    constructor() {
        super();
    }

    setComponent(type, value) {
        if (this.hasComponent(type)) {
            this.components[type] = value;
        } else {
            console.error(`El componente ${type} para HSL no existe y, por tanto, no puede ser asignado`);
        }
    }

    getComponents() {
        /* Este método se sobreescribe en las subclasses*/
    }

    isValidFor(type) {
        return type.toLowerCase() == "web";
    }

    hasComponent() {
        /* Este método lo van a sobreescribir las subclases */
    }
}