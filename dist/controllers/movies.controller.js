"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovieController = void 0;
const movies_service_1 = require("../services/movies.service");
class MovieController {
    constructor() {
        this.movieService = new movies_service_1.MovieService();
        this.getMovies = (req, res, next) => {
            try {
                const users = this.movieService.getMovies();
                return res.status(200).json({ status: 200, data: users, message: "Succesfully Users Retrieved" });
            }
            catch (e) {
                return res.status(421).json({ status: 400, message: e.message });
            }
        };
    }
    getMovieById(req, res, next) {
        try {
            const movieId = String(req.params.id);
            const foundMovie = this.movieService.getMovieById(movieId);
            res.status(200).json({ data: foundMovie, message: 'findOne' });
        }
        catch (e) {
            return res.status(400).json({ status: 400, message: e.message });
        }
    }
    addMovie(req, res, next) {
        try {
            const movieData = req.body;
            const createdMovieData = this.movieService.addMovie(movieData);
            res.status(201).json({ data: createdMovieData, message: 'created' });
        }
        catch (error) {
            next(error);
        }
    }
}
exports.MovieController = MovieController;
//# sourceMappingURL=movies.controller.js.map