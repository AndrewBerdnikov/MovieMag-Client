import { makeAutoObservable } from 'mobx';

export default class MovieStore {
    constructor() {
        this._genres = [
            {genre: 'Триллер'},
            {genre: 'Боевик'},
            {genre: 'Драмма'},
            {genre: 'Романтика'},
        ];
        this._movie = [];
        makeAutoObservable(this);
    }

    setGenres(genres) {
        this._genres = genres;
    }

    setMovies(movie) {
        this._movie = movie;
    }

    get genres() {
        return this._genres;
    }

    get movie() {
        return this._movie;
    }
}