'use strict';

let instance = null;

class CoreHandler
{
    constructor() {
        if (!instance) {
            this.creationDate = new Date();
            this.children = new Array();
            instance = this;
        }
        return instance;
    }

    pushChildrenProcess(children) {
        this.children.push(children);
    }

    getChildrenNum() {
        return this.children.length;
    }
}
export { CoreHandler };
