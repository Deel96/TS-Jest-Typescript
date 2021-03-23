import {App} from "./app";
import {MoviesRoutes} from "./routes/movies.routes"

const app = new App([new MoviesRoutes()]);

app.start(5511);