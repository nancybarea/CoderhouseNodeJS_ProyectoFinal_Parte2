import logger from '../logger.js'
import CustomError from '../errores/CustomError.js';

//daos
import UsersDao from '../model/daos/UsersDao.js';
import MoviesDao from '../model/daos/MoviesDao.js'
import LivesDao from '../model/daos/LivesDao.js'
import MusicDao from '../model/daos/MusicDao.js'
import SeriesDao from '../model/daos/SeriesDao.js'
//dtos
import UserDto from '../model/dtos/UserDto.js';
import SerieDto from '../model/dtos/SerieDto.js'
import MovieDto from '../model/dtos/MovieDto.js'
import MusicDto from '../model/dtos/MusicDto.js'
import LiveDto from '../model/dtos/LiveDto.js'


export default class UsersApi {

    constructor() {
        this.usersDao = new UsersDao();
        this.moviesDao = new MoviesDao()
        this.livesDao = new LivesDao()
        this.seriesDao = new SeriesDao()
        this.musicDao = new MusicDao()
    }

    async emailExists(email) {
        try {
            await this.usersDao.getByEmail(email);
            return true;
        }
        catch (err) {
            if (err.estado == 404) return false;
            else throw err
        }
    }

    async get(email) {
        const data = await this.usersDao.getByEmail(email);
        return new UserDto(data);
    }

    async login(email, password) {
        try {
            const usuario = await this.get(email)
            if (!usuario.isValidPassword(password))
                return false
            else {
                await this.completePreference(usuario);
                return usuario.get();
            }
        }
        catch (err) {
            logger.error(`fallo el login de mail error:${err}`)
        }

    }

    async completePreference(usuario) {
        if (usuario.movies.length < 3) {
            const movies = await this.moviesDao.getAll()
            usuario.setMovies(movies)
        }

        if (usuario.live.length < 3) {
            const lives = await this.livesDao.getAll()
            usuario.setlives(lives)
        }

        if (usuario.series.length < 3) {
            const series = await this.seriesDao.getAll()
            usuario.setSeries(series)
        }

        if (usuario.music.length < 3) {
            const musics = await this.musicDao.getAll()
            usuario.setMusic(musics)
        }
    }

    async add(data) {
        try {

            const usuario = new UserDto(data)
            usuario._id = await this.usersDao.add(usuario)

            logger.info(`Registro Ok `);

            await this.completePreference(usuario);
            return usuario.get();
        }
        catch (err) {
            logger.error(`Error in Saving user: ${err}`);
            throw (err);
        }
    }

    //modify the password
    async changePassword(user, passwordCurrent, passwordNew) {
        try {
            //create user object with date of datebase
            const userBD = await this.usersDao.getByEmail(user.email);
            const userObj = new UserDto(userBD);

            //validate email and password
            if (userObj.isValidPassword(passwordCurrent)) {
                //If you validate OK, modify password 
                userObj.setNewPassword(passwordNew)
                //save to database
                const userNewBD = await this.usersDao.update(userObj)
                const userNewObj = new UserDto(userNewBD);
                await this.completePreference(userNewObj);
                return userNewObj;
            } else {
                logger.error(`Error validation email and password`);
                throw new CustomError(400, `Error validation email and password`)
            }
        }
        catch (err) {
            logger.error(`Error in Saving user: ${err}`);
            throw (err);
        }
    }

    //add new serie
    async setSeries(email, series) {
        let userDto = await this.usersDao.getByEmail(email);
        let user = new UserDto(userDto)
        user.series = series

        userDto = await this.usersDao.update(user);
        user = new UserDto(userDto);

        await this.completePreference(user);
        return user;    
    }

    //add new movie
    async setMovies(email, movies) {

        let userDto = await this.usersDao.getByEmail(email);
        let user = new UserDto(userDto)
        user.movies = movies

        userDto = await this.usersDao.update(user);
        user = new UserDto(userDto);

        await this.completePreference(user);

        return user;
    }

    //set new music
    async setMusic(email, music) {

        let userDto = await this.usersDao.getByEmail(email);
        let user = new UserDto(userDto)
        user.music = music

        userDto = await this.usersDao.update(user);
        user = new UserDto(userDto);

        await this.completePreference(user);

        return user;

    }

    //set new music
    async setLive(email, live) {

        let userDto = await this.usersDao.getByEmail(email);
        let user = new UserDto(userDto)
        user.live = live

        userDto = await this.usersDao.update(user);
        user = new UserDto(userDto);

        await this.completePreference(user);

        return user;
    }

}





