import { Router } from "express";

import * as moviesController from "../controller/MoviesController.js";
import {mwdIsAuth} from "../controller/UsersController.js";

const MoviesRoute  = new Router();

MoviesRoute.get("/movies", mwdIsAuth, moviesController.getAll);

// moviesController.get("/movies/:id", mwdIsAuth, moviesController.getMovie);
// moviesController.post("/movies", mwdIsAuth, moviesController.postMovie);
// moviesController.put("/movies/:id", mwdIsAuth, moviesController.putMovie);
// moviesController.delete("/movies/:id", mwdIsAuth, moviesController.deleteMovie);

export default MoviesRoute;
