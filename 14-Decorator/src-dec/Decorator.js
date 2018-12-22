import { readonly, log } from './DecoratorsLib.js';

export default class UpflixMovie {

    constructor(nombre) {
        this.name = nombre;
        this.visited = false;
        this.viewed = [];
        this.firstView = null;
    }

    @readonly
    getViewed()
    {
        return this.visited;
    }

    @log("llamando a getVisited...")
    /*@readonly*/
    getVisited() {
        return this.visited;
    }

    @log("Llamando a getViewedActions...")
    getViewedActions() {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve ([new Date("2018-06-11"), new Date("2018-08-09")]);
            }, 1500)
        });
    }

    @log("Llamando a setName...")
    updateName(name) {
        this.name = name;
    }
}



