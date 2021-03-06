import { v4 as uuidv4 } from 'uuid'; // to create a unique id
import { MovieEntry } from "../models/movies.model";

export class MovieRepository {
    private movies:MovieEntry[] = [
        {id:"1",name:"Star Wars"},
        {id:"2",name:"Star Trek"},
        {id:"3",name:"Lord of the Rings"}
    ]
    getMovies():MovieEntry[]{
        return this.movies;
    }
    getMovieById(uuid:string):MovieEntry{
        const result = this.movies.find(entry => {
            return entry.id === uuid;
          })
          return result;
    }


    addMovie(entry:MovieEntry):MovieEntry{
        entry.id =uuidv4();
        this.movies.push(entry);
        return entry;
    }
    deleteMovie(uuid:string):MovieEntry[]{
        var result = this.movies.filter(entry => {
            return entry.id === uuid
          })

          if (result.length < 1) {throw new Error ("Element does not exist");}

        this.movies = this.movies.filter(entry => {
        return entry.id !== uuid
        })

        return this.movies;

        
    }

}
