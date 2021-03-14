import{MovieService} from "../services/movies.service"
import {Request,Response,NextFunction} from "express"
import { MovieEntry } from "../models/movies.model";

export class MovieController{
    private movieService = new MovieService();

    public getMovies = (req:Request,res:Response,next:NextFunction)=>{
        try{
            const users = this.movieService.getMovies();
            return res.status(200).json({ status: 200, data: users, message: "Succesfully Users Retrieved" });
        }
        catch(e){
            return res.status(421).json({ status: 400, message: e.message });
        }
    }   

    public getMovieById(req:Request,res:Response,next:NextFunction){
        try{
            const movieId = String(req.params.id);
            const foundMovie: MovieEntry = this.movieService.getMovieById(movieId);
      
            res.status(200).json({ data: foundMovie, message: 'findOne' });
        }
        catch(e){
            return res.status(400).json({ status: 400, message: e.message });
        }
    }   

    public addMovie(req:Request,res:Response,next:NextFunction){
        try {
            const movieData: MovieEntry = req.body;
            const createdMovieData: MovieEntry = this.movieService.addMovie(movieData);
      
            res.status(201).json({ data: createdMovieData, message: 'created' });
          } catch (error) {
            next(error);
          }
    }  
}
    
   