import { MovieEntry } from "../models/movies.model";
import { MovieRepository } from "../repositories/movies.repository";
import { MovieService } from "./movies.service";

const myDb: jest.Mocked<MovieRepository> = new MovieRepository() as any;

jest.mock("../repositories/movies.repository");

beforeEach(() => {
  myDb.getMovies.mockImplementation(() =>{ 
    const entries = [new MovieEntry("111","mockedMovie")];
    return entries;
    })
  myDb.addMovie.mockImplementation( (entry:MovieEntry) =>  {
    return new MovieEntry("111",entry.name)
});

myDb.deleteMovie.mockImplementation( (id:string) =>  {
 
      if (id==="thisMovieDoesNotExist") {throw new Error ("Element does not exist");}
    return [];
});
});

describe("Movie Service Unit Test",()=>{
    describe("Return all Movies",()=>{
        it("should return all movies",()=>{  
            const db = myDb;
    
            const service = new MovieService(db);
            const movies = service.getMovies();
            expect(movies[0]).toBeInstanceOf(MovieEntry)
            expect(movies[0].id).toBe("111");
            expect(movies[0].name).toBe("mockedMovie");
        })
    
        it("should return an error expection",()=>{  
            const db = myDb; 
            const service = new MovieService(null);
            expect(service.getMovies).toThrow(Error);
            expect(service.getMovies).toThrow("receicing movies failed");            
        })
    })
    
    describe("Add a Movie",()=>{
        it("should add a movie",()=>{     
            const db = myDb;
    
            const service = new MovieService(db);
            const newMovie = new MovieEntry(null,"addedMovie");
            const addedMovie = service.addMovie(newMovie);
            
            expect(addedMovie).toBeInstanceOf(MovieEntry)
            expect(addedMovie.id).toBe("111");
            expect(addedMovie.name).toEqual(newMovie.name);      
        })

        it("should return an error while adding a movie",()=>{     
            const db = myDb;
    
            const service = new MovieService(db);
            const newMovie = new MovieEntry(null,"");
    
            expect(()=>{service.addMovie(newMovie)}).toThrow(Error);
            expect(()=>{service.addMovie(newMovie)}).toThrow("Name cannot be empty");        
        })
    })

    describe("Delete a Movies",()=>{
    it("should remove a movie",()=>{
        const db = myDb;
        const service = new MovieService(db);
        const allMovies = service.getMovies();
        const movieDeleted = service.deleteMovie(allMovies[0].id);

        expect(movieDeleted.length).toEqual(allMovies.length-1);   
        })

    it("should return an error while deleting a movie",()=>{     
        const db = myDb;
        const service = new MovieService(db);

        expect(()=>{service.deleteMovie("thisMovieDoesNotExist")}).toThrow(Error);
        expect(()=>{service.deleteMovie("thisMovieDoesNotExist")}).toThrow("Element does not exist");  
        })
    })
})