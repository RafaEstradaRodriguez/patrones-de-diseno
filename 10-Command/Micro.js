export default class Micro
{
    constructor()
    {
        this._micro = null;
    }

    _capture() {
        return navigator.mediaDevices.getUserMedia({
            audio: true,
            video: false
        });
    }

    _setMicro(stream)
    {
        this._micro = stream;
        console.log(stream);
    }

    hasMicro()
    {
        return this._micro;
    }
}
