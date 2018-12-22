export default class Observers
{
    constructor() {
        this.observerList = [];
    }

    add(observer)
    {
        this.observerList.push(observer);
    }

    remove(observerId)
    {
        this.observerList = this.observerList.filter(observer => {
            if (observer.id != observerId) {
                return observer;
            }
        });
    }

    indexOf(observerId)
    {
        for (let i = 0; i < this.observerList.length; i++) {
            if (this.observerList[i].id == observerId) {
                return i;
            }
        }
        return -1;
    }

    length()
    {
        return this.observerList.length;
    }

    get(observerId)
    {
        let idx = this.indexOf(observerId);
        if (idx != -1) {
            return this.observerList[idx];
        }
        return null;
    }

    getIndex(idx)
    {
        if (idx >= 0 && idx < this.observerList.length) {
            return this.observerList[idx];
        }
        return null;
    }
}