import { MovieEntry } from "../models/movies.model";
import { MovieRepository } from "../repositories/movies.repository";

export class MovieService {
    private moviesProvider : MovieRepository
    constructor(moviesProvider : MovieRepository){
        this.moviesProvider = moviesProvider;
    }

    public getMovies():MovieEntry[]{
        try{
            const allMovies = this.moviesProvider.getMovies();
            return  allMovies;
        }
        catch(e){
            throw new Error("receicing movies failed");
        }
    }
    public getMovieById(uuid:string):MovieEntry{
        const foundMovie = this.moviesProvider.getMovieById(uuid);
        return foundMovie;

    }
    public addMovie(entry : MovieEntry):MovieEntry{
        if(entry.name.length === 0 ) throw new Error("Name cannot be empty");

        const addedMovie = this.moviesProvider.addMovie(entry)
        return addedMovie;
    }

    public deleteMovie(uuid:string):MovieEntry[]{
        const deletedMovie = this.moviesProvider.deleteMovie(uuid);
        return deletedMovie;
    }
}