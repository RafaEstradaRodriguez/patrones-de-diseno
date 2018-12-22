import PrintColor from './PrintColor.js';

export default class PantoneSolidColor extends PrintColor {

    constructor()
    {
        super();
        this.type = "Pantone Solid";
    }

    setComponent(type, value)
    {
        if (this.hasType(type) && this.isValidValue(value)) {
            this.components["type"] = value;
            return this;
        }
        console.error(`El tipo ${type} no es un tipo válido, o el valor ${value} es incorrecto, para PantoneSolid`);
    }

    hasType(type)
    {
        return Object.keys(PantoneSolidColor.TYPES).includes(type);
    }

    isValidValue(type, value)
    {
        value
    }

    getTypes() {
        return PantoneSolidColor.TYPES;
    }
}

PantoneSolidColor.TYPES = {
    solid: /^PANTONE\s\d{3,4}\sC$/,
    metallic: /^PANTONE\s10\d{3}C$/
}
