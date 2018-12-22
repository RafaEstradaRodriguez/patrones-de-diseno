import Iterable from "./Iterable.js";
import JugadoresIterator from "./JugadoresIterator.js";

export default class JugadoresIterable extends Iterable
{
    constructor(list)
    {
        super();
        this.list = list;
        this.iterator = null;
    }

    setIterador()
    {
        if (!this.iterator) {
            this.iterator = new JugadoresIterator(this.list);
        }
    }
}
