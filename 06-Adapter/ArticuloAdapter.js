import Article from "./Article.js";
import Articulo from "./Articulo.js";

export default class ArticuloAdapter
{
    constructor(input)
    {
        this.content = input;
        this.keysMapping = {
            titulo: "title",
            entradilla: "subheadline",
            fechaPub: "publishDate"
        };
        this.articulo = null;
    }

    render()
    {
        if (this.content.titulo) {
            let content = this.adaptContent();
            this.content = content;
        }

        this.articulo = new Article(this.content);
        return this.articulo.render();
    }

    adaptContent() {
        let contentKeys = Object.keys(this.content);
        let contentAdapted = {};

        for (let key of contentKeys) {
            contentAdapted[this.keysMapping[key]] = this.content[key].replace(/__(.*)__/, `**$1**`);
        }
        return contentAdapted;
    }
}
