import WebColorFactory from "./WebColorFactory.js";
import PrintColorFactory from "./PrintColorFactory.js";

export default class AbstractColorFactory
{
    static getColorFactory(type) {

        switch (parseInt(type)) {
            case AbstractColorFactory.TYPES.webColor:
                return new WebColorFactory();

            case AbstractColorFactory.TYPES.printColor:
                return new PrintColorFactory();
        }
    }

    static getTypes() {
        return AbstractColorFactory.TYPES;
    }
}

AbstractColorFactory.TYPES = {
    webColor: 1,
    printColor: 2
}