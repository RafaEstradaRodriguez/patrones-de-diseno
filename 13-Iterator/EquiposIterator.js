import Iterator from "./Iterator.js";

export default class EquiposIterator extends Iterator
{
    constructor(agregador)
    {
        super();
        this.index = 'local';
        this.agregador = agregador;
    }

    first() {
        this.index = 'local';
        return this.agregador.local;
    }

    next()
    {
         if (this.index == 'local') {
             this.index = 'visitante';
             return this.agregador.visitante;
         }
         this.index = 'local';
         return this.agregador.local;
    }

    prev()
    {
        return this.next();
    }

    last()
    {
        this.index = 'visitante';
        return this.agregador.visitante;
    }

    curItem()
    {
        return this.agregador[this.index];
    }
}
