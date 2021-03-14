import { v4 as uuidv4 } from 'uuid';


 export class MovieEntry{
     public id:string;
     public name:string;
 }
 export class MovieDataBase {
    private movies:MovieEntry[] = [
        {id:"1",name:"Star Wars"},
        {id:"2",name:"Star Trek"},
        {id:"3",name:"Lord of the Rings"}
    ]
    getMovies(){
        return this.movies;
    }
    getMovieById(uuid:string){
        const result = this.movies.find(entry => {
            return entry.id === uuid;
          })
          return result;
    }

    addMovie(entry:MovieEntry){
        entry.id =uuidv4();
        this.movies.push(entry);
        return entry;
    }

}
