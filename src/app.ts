import express from 'express';
import bodyParser from "body-parser"
import { Route } from './interfaces/routes.interface';

export class App {

    public app:express.Application;
    constructor(routes :Route[]) {
        this.app = express();
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.mountRoutes(routes);
       
    }
    private mountRoutes(routes: Route[]): void {
      routes.forEach(route => {
        this.app.use('/', route.router);
      });
      this.app.use('/*', (req,res,next)=>{res.status(404).send('endpoint not found')});
    }

    public start(port:number) {
        this.app.listen(port, () => {
          console.log(`Server started on port ${port}`);
        });
      }
}
