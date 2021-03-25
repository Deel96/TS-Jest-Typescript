import {Router} from "express"
import {MovieController} from "../controllers/movies.controller"
import { Route } from "../interfaces/routes.interface";
export class MoviesRoutes implements Route{
    public router = Router();
    private moviesController: MovieController = new MovieController();
    public path ="/movies"
    constructor(){
        this.router.get(`${this.path}`, this.moviesController.getMovies)
        this.router.get(`${this.path}/:id`, this.moviesController.getMovieById)
        this.router.post(`${this.path}`,this.moviesController.addMovie)
        this.router.delete(`${this.path}/:id`, this.moviesController.deleteMovieById)
    }
}





