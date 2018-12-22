import PantoneCMYKColor from './PantoneCMYKColor.js';

export default class PantoneCMYKControlsView
{
    constructor()
    {
        this.PantoneColor = new PantoneCMYKColor();
    }

    render()
    {
        const components = this.PantoneColor.getTypes();
        let template = `
            <input type="text" pattern="${components}" placeholder="Introduzca el Pantone CMYK">
        `;
        return template;
    }
}