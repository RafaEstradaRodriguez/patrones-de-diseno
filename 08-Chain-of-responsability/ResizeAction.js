import BaseAction from "./BaseAction.js";

export default class ResizeAction extends BaseAction
{
    constructor()
    {
        super();
        this.name = "[ResizeAction]";
    }

    log() {
        console.log(`[Resize] - Redimensiono la imagen`);
    }

    doAction(data) {
        console.log('do action - resize', data);
        data.style.transform = "scale(1.2)";
    }
}
