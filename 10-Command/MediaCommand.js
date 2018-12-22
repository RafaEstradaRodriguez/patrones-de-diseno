import Command from "./Command.js";
import Video from "./Video.js";
import Audio from "./Audio.js";

export default class MediaCommand extends Command
{
    constructor(htmlControl) {
        super(htmlControl);
        this._target = null;

    }

    set target(contexto) {
        if (contexto.id.indexOf('video') != -1) {
            this._target = new Video(contexto);
            return;
        }

        if (contexto.id.indexOf('audio') != -1) {
            this._target = new Audio(contexto);
        }
    }

    execute(commandName) {
        if ( this._target && this._target['_' + commandName]) {
            this._target['_' + commandName](Array.from(arguments).slice(1));
            return true;
        }
        return false;
    }
}