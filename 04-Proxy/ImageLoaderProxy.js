import ImageLoader from './ImageLoader.js';

export default class ImageLoaderProxy
{
    constructor()
    {
        this.cache = 'proxy-images-cache';
    }

    setUrl(url)
    {
        this.url = `./${url}.jpg`;
    }

    load()
    {
        return caches.match(this.url).then(response => {
            if (response) {
                return response.blob();
            }
            let imgLoader = new ImageLoader();
            imgLoader.setUrl(this.url);

            return imgLoader.load().then(response => {
                caches.open(this.cache).then(cache => {
                    cache.put(this.url, new Response(response));
                });
                return response;
            })

        });




    }
}