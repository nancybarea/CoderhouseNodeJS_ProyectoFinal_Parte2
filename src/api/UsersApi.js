import UsersDao from '../model/daos/UsersDao.js';
import UserDto from '../model/dtos/UserDto.js';

import logger from '../logger.js'
import MoviesDao from '../model/daos/MoviesDao.js'
import LivesDao from '../model/daos/LivesDao.js'
import MusicDao from '../model/daos/MusicDao.js'
import SeriesDao from '../model/daos/SeriesDao.js'
import SerieDto from '../model/dtos/SerieDto.js'


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

    async completePreference(usuario){
        if( usuario.movies.length < 3)
        {
            const movies = await this.moviesDao.getAll()
            usuario.setMovies(movies)
        }

        if( usuario.live.length < 3)
        {
            const lives = await this.livesDao.getAll()
            usuario.setlives(lives)
        }

        if( usuario.series.length < 3)
        {
            const series = await this.seriesDao.getAll()
            usuario.setSeries(series)
        }

        if( usuario.music.length < 3)
        {
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
       async addSeries(email, id) {

        //data y object serie. 
        const dataSerie = await this.seriesDao.getByObjectId(id);
        const serie = new SerieDto(dataSerie);

        // find if series exists in series collection
        // if exists  --> delete (later I add it with updated date)
        //await this.usersDao.delSeries(email, id);  
        //------ pending task ------

        // add new serie to user
        let dataUser = await this.usersDao.addSeries(email, serie.getForUser());
        let userUpdateObj = new UserDto(dataUser);

        //if it have more than 3 series delete the oldest date
        // buscar en objeto --> hacer una funcion dto que me devuelva el id con la peli a borrar 
        // si devuelve id => borro
            //dataUser = await this.usersDao.delSeries(email, id);
            //userUpdateObj = new UserDto(dataUser);
        //------ pending task ------

        return userUpdateObj;        
    }

}





