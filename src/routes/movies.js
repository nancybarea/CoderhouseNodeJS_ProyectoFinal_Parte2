import { Router } from "express";
import passport from '../controller/PassportLocal.js'
import * as moviesController from "../controller/MoviesController.js";

const MoviesRoute  = new Router();

MoviesRoute.get("/movies", passport.authenticate('jwt', { session: false }), moviesController.getAll);

// moviesController.get("/movies/:id", mwdIsAuth, moviesController.getMovie);
// moviesController.post("/movies", mwdIsAuth, moviesController.postMovie);
// moviesController.put("/movies/:id", mwdIsAuth, moviesController.putMovie);
// moviesController.delete("/movies/:id", mwdIsAuth, moviesController.deleteMovie);

export default MoviesRoute;
