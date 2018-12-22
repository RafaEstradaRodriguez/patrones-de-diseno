import PantoneSolidColor from './PantoneSolidColor.js';
import PantoneCMYKColor from './PantoneCMYKColor.js';

export default class PrintColorFactory
{
    constructor() {}

    getColor(type) {
        switch (type) {
            case PrintColorFactory.TYPES.PantoneSolid:
                return new PantoneSolidColor();

            case PrintColorFactory.TYPES.PantoneCMYK:
                return new PantoneCMYKColor();

            default:
                console.error(`El tipo ${type} no es un Pantone Color permitido.`);
        }
    }

    getTypes() {
        return PrintColorFactory.TYPES;
    }
}

PrintColorFactory.TYPES = {
    PantoneSolid: 1,
    PantoneCMYK: 2
};