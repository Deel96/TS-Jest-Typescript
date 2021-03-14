"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovieService = void 0;
const movies_model_1 = require("../models/movies.model");
class MovieService {
    constructor() {
        this.moviedb = new movies_model_1.MovieDataBase();
    }
    getMovies() {
        try {
            const allMovies = this.moviedb.getMovies();
            return allMovies;
        }
        catch (e) {
        }
    }
    getMovieById(uuid) {
        const foundMovie = this.moviedb.getMovieById(uuid);
        return foundMovie;
    }
    addMovie(entry) {
        const addedMovie = this.moviedb.addMovie(entry);
        return addedMovie;
    }
}
exports.MovieService = MovieService;
//# sourceMappingURL=movies.service.js.map