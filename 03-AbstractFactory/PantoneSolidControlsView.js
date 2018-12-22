import PantoneSolidColor from './PantoneSolidColor.js';

export default class PantoneSolidControlsView
{
    constructor()
    {
        this.PantoneColor = new PantoneSolidColor();
    }

    render()
    {
        const components = this.PantoneColor.getTypes();
        let template = `
            <input type="text" pattern="${components.solid}" placeholder="Introduzca el Pantone Solid Code">
        `;
        return template;
    }
}