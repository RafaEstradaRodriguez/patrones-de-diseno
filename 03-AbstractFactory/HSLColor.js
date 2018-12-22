import WebColor from './WebColor.js';

export default class HSLColor extends WebColor
{
    constructor() {
        super();
        this.type = "HSL";
    }

    hasComponent(type)
    {
        return HSLColor.COMPONENTS.includes(type);
    }

    getComponents()
    {
        return HSLColor.COMPONENTS;
    }
}

HSLColor.COMPONENTS = {H: [0,100], S: [0,100], L:[0,100]};