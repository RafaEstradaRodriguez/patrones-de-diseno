export default class MediaElement
{
    constructor(htmlControl) {
        this.target = htmlControl;
        this._type = 'media-element';
    }

    get type() {
        return this._type;
    }

    _play() {
        this.target.play();
        console.log(`[Play] - ${this.type}`);
    }

    _pause() {
        this.target.pause();
        console.log(`[Pause] - ${this.type}`);
    }

    _stop() {
        this._pause();
        this.target.currentTime = 0;
        console.log(`[Stop] - ${this.type}`);
    }
}