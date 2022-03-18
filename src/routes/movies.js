import { Router } from "express";
import passport from '../controller/PassportLocal.js'
import * as moviesController from "../controller/MoviesController.js";

const MoviesRoute  = new Router();

MoviesRoute.get("/", passport.authenticate('jwt', { session: false }), moviesController.getAll);

export default MoviesRoute;
