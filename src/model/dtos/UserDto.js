import bCrypt from 'bcrypt';

export default class UsuarioDto {

    email;
    password;
    firstname;
    lastname;
    avatar;
    live;
    movies;
    music;
    series;

    constructor({ _id, email, password, firstname, lastname, avatar, live, movies, series, music }) {

        if (_id === undefined) {
            this._id = undefined;
            this.live = [];
            this.movies = [];
            this.series = [];
            this.music = [];
            this.password = createHash(password)
        }
        else {
            this._id = _id;
            this.movies = movies||[]
            this.series = series||[]
            this.live = live||[]
            this.music = music||[]
            this.password = password;
        }

        this.email = email;
        this.firstname = firstname;
        this.lastname = lastname;
        this.avatar = avatar;

    }

    get() {
        return {
            email: this.email,
            firstname: this.firstname,
            lastname: this.lastname,
            avatar: this.avatar,
            preference: { live: this.live, movies: this.movies, series: this.series, music: this.music }
        }
    }

    isValidPassword(password) {
        return bCrypt.compareSync(password, this.password);
    }

    setNewPassword(password) {
        this.password = createHash(password)
    }

    setlives(lives) {
        for (const live of lives) {
            if (this.live.length < 3) {
                live.date = Date.now()
                this.live.push(live)
            }
        }
    }

    setMovies(movies) {
        for (const movie of movies) {
            if (this.movies.length < 3) {
                movie.date = Date.now()
                this.movies.push(movie)
            }
        }
    }

    setSeries(series) {
        for (const serie of series) {
            if (this.series.length < 3) {
                serie.date = Date.now()
                this.series.push(serie)
            }
        }
    }

    setMusic(musics) {
        for (const music of musics) {
            if (this.music.length < 3) {
                music.date = Date.now()
                this.music.push(music)
            }
        }
    }
    

}

function createHash(password) {
    return bCrypt.hashSync(password, bCrypt.genSaltSync(10), null);
}

