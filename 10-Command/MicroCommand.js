import Command from "./Command.js";

export default class MicroCommand extends Command
{
    constructor(target) {

        this.target = target;
    }

    execute(commandName) {

        if ( this.target && this.target[commandName]) {
            this.target['_' + commandName](Array.from(arguments).slice(1));
            return true;
        }
        return false;
    }
}