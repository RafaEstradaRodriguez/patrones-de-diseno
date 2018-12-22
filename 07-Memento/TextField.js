export default class TextField
{
    constructor() {
        this.text = "";
    }

    setText(text)
    {
        this.text = text;
    }

    getText()
    {
        return this.text;
    }
}
