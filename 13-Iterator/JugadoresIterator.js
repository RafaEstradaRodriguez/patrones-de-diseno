import Iterator from "./Iterator.js";

export default class JugadoresIterator extends Iterator
{
    constructor(agregador)
    {
        super();
        this.agregador = agregador;
        this.index = 0;
    }

    first() {
        this.index = 0;
        return this.agregador[0];
    }

    next() {
        if (this.index + 1 < this.agregador.length - 1) {
            this.index ++;
            return this.agregador[this.index];
        }
        return this.last();
    }

    prev() {
        if (this.index - 1 > 0) {
            this.index --;
            return this.agregador[this.index];
        }
        return this.first();
    }

    last() {
        this.index = this.agregador.length - 1;
        return this.agregador[this.index];
    }

    curItem() {
        return this.agregador[this.index];
    }



}
