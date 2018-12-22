export default class Color
{
    constructor() {
        this.components = {};
        this.type = "default";
    }

    setComponent() {}

    getComponents() {
        return this.components;
    };

    isValidFor(type) {};

    getType() {
        return this.type;
    };
}