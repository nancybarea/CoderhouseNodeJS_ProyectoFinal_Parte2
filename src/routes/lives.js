import { Router } from 'express'

import  * as livesController from '../controller/LivesController.js'
import {mwdIsAuth} from '../controller/UsersController.js'

const LivesRoutes = new Router();

LivesRoutes.get('/lives', mwdIsAuth, livesController.getAll)


export default LivesRoutes 
