import RGBColor from './RGBColor.js';

export default class HSLControlsView
{
    constructor()
    {
        this.RGBColor = new RGBColor();
    }

    render()
    {
        const components = this.RGBColor.getComponents();
        let template = `
            <input type="number" min="${components["R"][0]}" max="${components["R"][1]}" value="0" id="c1">
            <input type="number" min="${components["G"][0]}" max="${components["G"][1]}" value="0" id="c2">
            <input type="number" min="${components["B"][0]}" max="${components["B"][1]}" value="0" id="c3">
            
        `;
        return template;
    }
}