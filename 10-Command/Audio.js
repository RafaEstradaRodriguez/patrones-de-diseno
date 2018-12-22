import MediaElement from "./MediaElement.js";

export default class Audio extends MediaElement
{
    constructor(htmlControl) {
        super(htmlControl);
        this._type = "audio";
    }
}