import Color from './Color.js';

export default class PrintColor extends Color
{
    constructor()
    {
        super();
    }

    setComponent(type, value)
    {
        /* Este método lo sobreescribe las subclases */
    }

    getComponents() {
        /* Este método lo sobreescribe las subclases */
    }

    isValidFor(type)
    {
        return type.toLowerCase() == "print";
    }
}