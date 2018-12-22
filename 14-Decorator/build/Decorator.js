var _dec, _dec2, _dec3, _desc, _value, _class;

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
        desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
        return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
        Object['define' + 'Property'](target, property, desc);
        desc = null;
    }

    return desc;
}

import { readonly, log } from './DecoratorsLib.js';

let UpflixMovie = (_dec = log("llamando a getVisited..."), _dec2 = log("Llamando a getViewedActions..."), _dec3 = log("Llamando a setName..."), (_class = class UpflixMovie {

    constructor(nombre) {
        this.name = nombre;
        this.visited = false;
        this.viewed = [];
        this.firstView = null;
    }

    getViewed() {
        return this.visited;
    }

    /*@readonly*/
    getVisited() {
        return this.visited;
    }

    getViewedActions() {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve([new Date("2018-06-11"), new Date("2018-08-09")]);
            }, 1500);
        });
    }

    updateName(name) {
        this.name = name;
    }
}, (_applyDecoratedDescriptor(_class.prototype, "getViewed", [readonly], Object.getOwnPropertyDescriptor(_class.prototype, "getViewed"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "getVisited", [_dec], Object.getOwnPropertyDescriptor(_class.prototype, "getVisited"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "getViewedActions", [_dec2], Object.getOwnPropertyDescriptor(_class.prototype, "getViewedActions"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "updateName", [_dec3], Object.getOwnPropertyDescriptor(_class.prototype, "updateName"), _class.prototype)), _class));
export { UpflixMovie as default };