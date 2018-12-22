import RGBColor from './RGBColor.js';
import HSLColor from './HSLColor.js';

export default class WebColorFactory
{
    constructor() {}

    getColor(type) {
        switch (type) {
            case WebColorFactory.TYPES.RGBColor:
                return new RGBColor();

            case WebColorFactory.TYPES.HSLColor:
                return new HSLColor();

            default:
                console.error(`El tipo ${type} no es un WebColor permitido.`);
        }
    }

    getTypes() {
        return WebColorFactory.TYPES;
    }
}

WebColorFactory.TYPES = {
    RGBColor: 1,
    HSLColor: 2
};