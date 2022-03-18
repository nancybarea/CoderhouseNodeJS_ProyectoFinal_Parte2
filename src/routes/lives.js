import { Router } from 'express'
import passport from '../controller/PassportLocal.js'
import  * as livesController from '../controller/LivesController.js'

const LivesRoutes = new Router();

LivesRoutes.get('/', passport.authenticate('jwt', { session: false }), livesController.getAll)
LivesRoutes.get('/:id', passport.authenticate('jwt', { session: false }), livesController.getById)


export default LivesRoutes 
