export default class ImageLoader
{
    constructor()
    {
    }

    setUrl(url)
    {
        this.url = url;
    }

    load()
    {
        return fetch(this.url).then(response => {
            if ( response.ok ) {
                return response.blob();
            }
            return null;
        }).catch(e => {
            console.log("Se ha producido un error al cargar la imagen")
        });
    }
}