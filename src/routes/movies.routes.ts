import {Router} from "express"
import {MovieController} from "../controllers/movies.controller"
export class MoviesRoutes{
    public router = Router();
    private moviesController = new MovieController();

    constructor(){
        this.router.get("/movies", this.moviesController.getMovies)
        this.router.get("/movies/:id", this.moviesController.getMovieById)
        this.router.post("movies",this.moviesController.addMovie)
    }
}





