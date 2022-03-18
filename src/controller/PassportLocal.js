
import passport from 'passport';
import { Strategy as JWTstrategy } from 'passport-jwt';
import { Strategy as LocalStrategy } from 'passport-local';
import { mdwSignUp, mdwLogin, mdwValidateToken } from './UsersController.js'
import {jwtOpts} from '../../config/config.js'


passport.use('signup', new LocalStrategy({usernameField: 'email', passwordField: 'password', passReqToCallback: true }, mdwSignUp))

passport.use('login', new LocalStrategy({ usernameField: 'email', passwordField: 'password'}, mdwLogin));

passport.use(new JWTstrategy(jwtOpts, mdwValidateToken));

export default passport;
