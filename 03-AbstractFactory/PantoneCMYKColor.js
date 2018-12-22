import PrintColor from './PrintColor.js';

export default class PantoneCMYKColor extends PrintColor {

    constructor()
    {
        super();
        this.type = "Pantone CMYK";
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
        return PantoneCMYKColor.TYPES != undefined;
    }

    isValidValue(type, value)
    {
        return PantoneCMYKColor.TYPE.test(value);
    }

    getTypes() {
        return PantoneCMYKColor.TYPES;
    }

}

PantoneCMYKColor.TYPES = /^PANTONE\sP\s\d{1,3}\-\d{1,2}\s[C|U]?$/;
