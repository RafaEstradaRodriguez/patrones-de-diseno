import Iterable from "./Iterable.js";
import EquiposIterator from "./EquiposIterator.js";

export default class EquiposIterable extends Iterable
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
            this.iterator = new EquiposIterator(this.list);
        }
    }
}
