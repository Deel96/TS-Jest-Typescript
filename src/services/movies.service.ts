import {MovieDataBase,MovieEntry} from "../models/movies.model"

export class MovieService {
    private moviedb = new MovieDataBase(); 
    public getMovies(){
        try{
            const allMovies = this.moviedb.getMovies();
            return  allMovies;
        }
        catch(e){

        }
    }
    public getMovieById(uuid:string){
        const foundMovie = this.moviedb.getMovieById(uuid);
        return foundMovie;

    }
    public addMovie(entry : MovieEntry):MovieEntry{
        const addedMovie = this.moviedb.addMovie(entry)
        return addedMovie;
    }
}