"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MoviesRoutes = void 0;
const express_1 = require("express");
const movies_controller_1 = require("../controllers/movies.controller");
class MoviesRoutes {
    constructor() {
        this.router = express_1.Router();
        this.moviesController = new movies_controller_1.MovieController();
        this.router.get("/movies", this.moviesController.getMovies);
        this.router.get("/movies/:id", this.moviesController.getMovieById);
        this.router.post("movies", this.moviesController.addMovie);
    }
}
exports.MoviesRoutes = MoviesRoutes;
//# sourceMappingURL=movies.routes.js.map