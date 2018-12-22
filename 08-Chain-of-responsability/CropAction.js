import BaseAction from "./BaseAction.js";

export default class CropAction extends BaseAction
{
    constructor()
    {
        super();
        this.name = "[CropAction]";
    }

    log() {
        console.log(`[Crop] - Corto la imagen desde el 25% al 75%`);
    }

    doAction(img, canvas) {
        let ctx = canvas.getContext('2d');
        ctx.drawImage(img, 160, 106, 400, 427, 0, 0, 400, 427);
        return canvas;
    }
}
