import { Router } from 'express'
import passport from '../controller/PassportLocal.js'

import  * as musicController from '../controller/MusicController.js'

const MusicRoutes = new Router();

MusicRoutes.get('/', passport.authenticate('jwt', { session: false }), musicController.getAll)


export default MusicRoutes 