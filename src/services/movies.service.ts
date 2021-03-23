import {MovieDataBase,MovieEntry} from "../models/movies.model"

export class MovieService {
    private moviesProvider : MovieDataBase
    constructor(moviesProvider : MovieDataBase){
        this.moviesProvider = moviesProvider;
    }

    public getMovies():MovieEntry[]{
        try{
            const allMovies = this.moviesProvider.getMovies();
            return  allMovies;
        }
        catch(e){

        }
    }
    public getMovieById(uuid:string):MovieEntry{
        const foundMovie = this.moviesProvider.getMovieById(uuid);
        return foundMovie;

    }
    public addMovie(entry : MovieEntry):MovieEntry{
        const addedMovie = this.moviesProvider.addMovie(entry)
        return addedMovie;
    }

    public deleteMovie(uuid:string):MovieEntry[]{
        const deletedMovie = this.moviesProvider.deleteMovie(uuid);
        return deletedMovie;
    }
}