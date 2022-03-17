import { Router } from 'express'

import  * as seriesController from '../controller/SeriesController.js'
import {mwdIsAuth} from '../controller/UsersController.js'

const SeriesRoutes = new Router();

SeriesRoutes.get('/', mwdIsAuth, seriesController.getAll)


export default SeriesRoutes 
