"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovieDataBase = exports.MovieEntry = void 0;
const uuid_1 = require("uuid");
class MovieEntry {
}
exports.MovieEntry = MovieEntry;
class MovieDataBase {
    constructor() {
        this.movies = [
            { id: "1", name: "Star Wars" },
            { id: "2", name: "Star Trek" },
            { id: "3", name: "Lord of the Rings" }
        ];
    }
    getMovies() {
        return this.movies;
    }
    getMovieById(uuid) {
        const result = this.movies.find(entry => {
            return entry.id === uuid;
        });
        return result;
    }
    addMovie(entry) {
        entry.id = uuid_1.v4();
        this.movies.push(entry);
        return entry;
    }
}
exports.MovieDataBase = MovieDataBase;
//# sourceMappingURL=movies.model.js.map