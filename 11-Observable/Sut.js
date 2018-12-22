import Observers from "./Observers.js";

export default class Sut
{
    constructor()
    {
        this.observers = new Observers();
    }

    addObserver(observer)
    {
        this.observers.add(observer);
    }

    removeObserver(observerId)
    {
        this.observers.remove(observerId);
    }

    emitAll(data, callback)
    {
        for (let i = 0; i < this.observers.length(); i++) {
            let observer = this.observers.getIndex(i);
            if (observer && observer.hasTopic(data)) {
                observer.update(data, callback);
            }
        }
    }
}