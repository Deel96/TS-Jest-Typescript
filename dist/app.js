"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const express_1 = __importDefault(require("express"));
const movies_routes_1 = require("./routes/movies.routes");
class App {
    constructor() {
        this.app = express_1.default();
        this.mountRoutes();
    }
    mountRoutes() {
        const movieRoutes = new movies_routes_1.MoviesRoutes();
        this.app.use('/', movieRoutes.router);
    }
    start(port) {
        this.app.listen(port, () => {
            console.log(`Server started on port ${port}`);
        });
    }
}
exports.App = App;
//# sourceMappingURL=app.js.map