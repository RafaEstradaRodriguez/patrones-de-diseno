export default class Movie
{
    constructor()
    {
        this._titulo = "";
        this._anio = 0;
        this._genero = "";
        this._actores = [];
    }

    set titulo(value) {
        this._titulo = value;
    }

    set anio(value) {
        this._anio = value;
    }

    set genero(value) {
        this._genero = value;
    }

    set actores(value) {
        this._actores = value;
    }

    get titulo() {
        return this._titulo;
    }

    get anio() {
        return this._anio;
    }

    get genero() {
        return this._genero;
    }

    get actores() {
        return this._actores;
    }


}
