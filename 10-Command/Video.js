import MediaElement from "./MediaElement.js";

export default class Video extends MediaElement
{
    constructor(htmlControl) {
        super(htmlControl);
        this._type = "video";
    }


}