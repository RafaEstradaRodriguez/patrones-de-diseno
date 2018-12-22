export default class Articulo
{
    constructor(inputData)
    {
        this.content = inputData;
    }

    render()
    {
        let htmlResult = "";

        if (this.content.titulo) {
            htmlResult += this.renderTitulo(this.content.titulo);
        }

        if (this.content.entradilla) {
            htmlResult += this.renderEntradilla(this.content.entradilla);
        }

        if (this.content.fechaPub) {
            htmlResult += this.renderFecha(this.content.fechaPub);
        }

        return htmlResult;
    }

    renderTitulo(content)
    {
        return `<h1>${content.replace(/__(.*)__/, `<b>$1</b>`)}</h1>`;
    }

    renderEntradilla(content)
    {
        return `<h2>${content.replace(/__(.*)__/, `<b>$1</b>`)}</h2>`
    }

    renderFecha(content)
    {
        return `<time datetime="${content}">${content}</timedate>`
    }
}
