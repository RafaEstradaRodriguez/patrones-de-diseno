export default class TextFieldSnapshots
{
    constructor() {
        this.snapshots = [];
    }

    addSnapshot(memento) {
        this.snapshots.push(memento);
    }

    getSnapshot() {
        if (this.snapshots.length) {
            return this.snapshots.pop();
        }
    }
}

