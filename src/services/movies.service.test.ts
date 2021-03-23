import { MovieDataBase, MovieEntry } from "../models/movies.model";
import { MovieService } from "./movies.service";
import { mocked } from "ts-jest/utils"

const myDb: jest.Mocked<MovieDataBase> = new MovieDataBase() as any;

jest.mock("../models/movies.model");
beforeAll(() => {


    

  myDb.getMovies.mockImplementation(() =>{ 
    const entries = [new MovieEntry("111","mockedMovie")];
    return entries;
    })
  myDb.addMovie.mockImplementation( (entry:MovieEntry) =>  {
    return new MovieEntry("111",entry.name)
});

myDb.deleteMovie.mockImplementation( (id:string) =>  {
    return [];
});
});

describe("Movie Service Unit Test",()=>{

    it("should return all movies",()=>{  
        const db = myDb;

        const service = new MovieService(db);
        const movies = service.getMovies();
        expect(movies[0]).toBeInstanceOf(MovieEntry) 

  
    })

    it("should add a movie",()=>{     
        const db = myDb;

        const service = new MovieService(db);
        const newMovie = new MovieEntry(null,"addedMovie");
        const moviesLengthBefore = service.getMovies().length;
        const addedMovie = service.addMovie(newMovie);
        const moviesLengthAfter = service.getMovies().length;

        expect(moviesLengthBefore).toEqual(moviesLengthAfter)
        expect(addedMovie.name).toEqual(newMovie.name);      
    })
    it("should remove a movie",()=>{
        const db = myDb;
        const service = new MovieService(db);
        const allMovies = service.getMovies();

        const movieDeleted = service.deleteMovie(allMovies[0].id);
        expect(movieDeleted.length).toEqual(allMovies.length-1);   
    })
})