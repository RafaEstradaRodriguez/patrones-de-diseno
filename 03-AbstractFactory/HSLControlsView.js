import HSLColor from './HSLColor.js';

export default class HSLControlsView
{
    constructor()
    {
        this.HSLColor = new HSLColor();
    }

    render()
    {
        const components = this.HSLColor.getComponents();
        let template = `
            <input type="number" min="${components["H"][0]}" max="${components["H"][1]}" value="0" id="c1">
            <input type="number" min="${components["S"][0]}" max="${components["S"][1]}" value="0" id="c2">
            <input type="number" min="${components["L"][0]}" max="${components["L"][1]}" value="0" id="c3">
        `;
        return template;
    }
}