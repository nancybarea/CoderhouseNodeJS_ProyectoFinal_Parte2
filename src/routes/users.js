import { Router } from 'express'
import passport from '../controller/PassportLocal.js'

import * as userController from '../controller/UsersController.js'

const UsersRoutes = new Router();

UsersRoutes.post('/login',
    passport.authenticate('login', { session: false, failureRedirect: '/faillogin' }),
    userController.postLogin);

UsersRoutes.post('/signup',
    userController.mdwValidaUser,
    passport.authenticate('signup', { session: false, failureRedirect: '/failsignup' }),
    userController.postLogin);


UsersRoutes.put('/users/password', passport.authenticate('jwt', { session: false }), userController.putPassword)

UsersRoutes.put('/users/series/:id', passport.authenticate('jwt', { session: false }), userController.putSerie)
UsersRoutes.put('/users/movies/:id', passport.authenticate('jwt', { session: false }), userController.putMovie)
UsersRoutes.put('/users/music/:id', passport.authenticate('jwt', { session: false }), userController.putMusic)
UsersRoutes.put('/users/lives/:id', passport.authenticate('jwt', { session: false }), userController.putLive)


UsersRoutes.get('/faillogin', userController.getfaillogin)

UsersRoutes.get('/failsignup', userController.getfailsignup)

UsersRoutes.get('/logout', userController.getlogout)


export default UsersRoutes



