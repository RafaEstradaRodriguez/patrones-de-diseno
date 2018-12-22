import Movie from './Movie.js';

export default class MovieJsonBuilder
{
    constructor()
    {
        this.prevBuilt = false;
        this.movie = new Movie();
    }

    build()
    {
        this.prevBuilt = true;
        return this.movie;
    }

    add(field, value)
    {
        this.movie[field] = value;
        return this.movie;
    }

    getJSON() {
        if (!this.prevBuilt) {
            return {};
        }

        return {
            titulo: this.movie.titulo,
            anio: this.movie.anio,
            genero: this.movie.genero,
            actores: this.movie.actores
        };
    }
}
