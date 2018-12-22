import RGBControlsView from "./RGBControlsView.js";
import HSLControlsView from "./HSLControlsView.js";
import PantoneSolidControlsView from "./PantoneSolidControlsView.js";
import PantoneCMYKControlsView from "./PantoneCMYKControlsView.js";

export default class ViewControlsFactory
{
    static getHTMLControls(type)
    {
        switch (type) {
            case "RGB": return new RGBControlsView().render();
            case "HSL": return new HSLControlsView().render();
            case "Pantone Solid": return new PantoneSolidControlsView().render();
            case "Pantone CMYK": return new PantoneCMYKControlsView().render();
        }
    }
}

ViewControlsFactory.TYPES = [
    "RGB", "HSL", "Pantone Solid", "Pantone CMYK"
];