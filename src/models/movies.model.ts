import { v4 as uuidv4 } from 'uuid'; // to create a unique id


 export class MovieEntry{

    constructor(id:string,name:string){
        this.id=id;
        this.name=name;
    }
     public id:string;
     public name:string;
 }
 export class MovieDataBase {
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

    getMovieByName(name:string):MovieEntry{
        const result = this.movies.find(entry => {
            return entry.name === name;
          })
          return result;
    }

    addMovie(entry:MovieEntry):MovieEntry{
        entry.id =uuidv4();
        this.movies.push(entry);
        return entry;
    }
    deleteMovie(uuid:string):MovieEntry[]{
        const movies = this.movies.filter((element:MovieEntry)=>{
            return element.id != uuid;
        })
        return movies;
    }

}
