import WebColor from './WebColor.js';

export default class RGBColor extends WebColor
{
    constructor() {
        super();
        this.type = "RGB";
    }

    hasComponent(type)
    {
        return Object.keys(RBGColor.COMPONENTS).includes(type);
    }

    getComponents() {
        return RGBColor.COMPONENTS;
    }
}

RGBColor.COMPONENTS = {R: [0,255], G: [0,255], B: [0,255]};
