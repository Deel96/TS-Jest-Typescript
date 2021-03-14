import express from 'express';
import{MoviesRoutes} from "./routes/movies.routes"

export class App {

    private app:express.Application;

    constructor() {
        this.app = express();
        this.mountRoutes();
    }
    private mountRoutes(): void {
        const movieRoutes = new MoviesRoutes()
            this.app.use('/', movieRoutes.router);
    }

    public start(port:number) {
        this.app.listen(port, () => {
          console.log(`Server started on port ${port}`);
        });
      }
}