import { Router } from 'express'

import  * as musicController from '../controller/MusicController.js'
import {mwdIsAuth} from '../controller/UsersController.js'

const MusicRoutes = new Router();

MusicRoutes.get('/', mwdIsAuth, musicController.getAll)


export default MusicRoutes 