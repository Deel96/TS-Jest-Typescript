import { MovieService } from "../services/movies.service"
import { Request, Response, NextFunction} from "express"
import { MovieEntry } from "../models/movies.model";
import { MovieRepository } from "../repositories/movies.repository";

export class MovieController{
    private movieService:MovieService
    constructor(){
        this.movieService= new MovieService(new MovieRepository());
    }
    public getMovies = (req:Request,res:Response,next:NextFunction)=>{
        try{
            const movies = this.movieService.getMovies();
            return res.status(200).json({ status: 200, data: movies, message: "getMovies" });
        }
        catch(e){
            return res.status(421).json({ status: 400, message: e.message });
        }
    }   

    public getMovieById= (req:Request,res:Response,next:NextFunction)=>{
        try{
            const movieId = String(req.params.id);
            const foundMovie: MovieEntry = this.movieService.getMovieById(movieId);
      
            res.status(200).json({ status:200, data: foundMovie, message: 'findOne' });
        }
        catch(e){
            return res.status(400).json({ status: 400, message: e.message });
        }
    }   

    public addMovie= (req:Request,res:Response,next:NextFunction)=>{
        try {
            const movieData: MovieEntry = req.body;
            const createdMovieData: MovieEntry = this.movieService.addMovie(movieData);
      
            res.status(201).json({ data: createdMovieData,status:200, message: 'addMovie' });
          } catch (error) {
            return res.status(400).json({ status: 400, message: error.message });
          }
    }  

    public deleteMovieById= (req:Request,res:Response,next:NextFunction)=>{
        try{
            const movieId = String(req.params.id);
            const movies: MovieEntry[] = this.movieService.deleteMovie(movieId);
      
            res.status(200).json({ status:200, data: movies, message: 'deleteMovie' });
        }
        catch(e){
            return res.status(400).json({status: 400, message: e.message });
        }
    }   
}
    
   