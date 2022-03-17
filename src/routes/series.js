import { Router } from 'express'

import  * as seriesController from '../controller/SeriesController.js'
import  * as userController from '../controller/UsersController.js'

const SeriesRoutes = new Router();

SeriesRoutes.get('/series', userController.mwdIsAuth, seriesController.getAll)


export default SeriesRoutes 
