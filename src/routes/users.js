import { Router } from 'express'
import passport from '../controller/PassportLocal.js'

import  * as userController from '../controller/UsersController.js'

const UsersRoutes = new Router();

UsersRoutes.post('/login',  passport.authenticate('login', {failureRedirect: '/faillogin' }), userController.postLogin);

UsersRoutes.post('/signup', userController.mdwValidaUser, passport.authenticate('signup', {failureRedirect: '/failsignup' }), userController.postSignup)

UsersRoutes.put('/users/password', userController.mwdIsAuth, userController.putPassword)

UsersRoutes.put('/users/series/:id', userController.mwdIsAuth, userController.putSerie)
UsersRoutes.put('/users/movies/:id', userController.mwdIsAuth, userController.putMovie)
UsersRoutes.put('/users/music/:id', userController.mwdIsAuth, userController.putMusic)
UsersRoutes.put('/users/lives/:id', userController.mwdIsAuth, userController.putLive)

UsersRoutes.get('/faillogin', userController.getfaillogin)

UsersRoutes.get('/failsignup', userController.getfailsignup)

UsersRoutes.get('/logout', userController.getlogout)


export default UsersRoutes 



