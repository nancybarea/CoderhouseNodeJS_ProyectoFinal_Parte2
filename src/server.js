import express, { json, urlencoded } from 'express'
import cors from 'cors';
import passport from './controller/PassportLocal.js'
import DefaultRoutes from "./routes/default.js"
import UsersRoutes from './routes/users.js'
import SeriesRoutes from './routes/series.js'
import MusicRoutes from './routes/music.js'
import LivesRoutes from './routes/lives.js';
import MoviesRoutes from './routes/movies.js';

const app = express()

app.use(json())
app.use(urlencoded({ extended: true }))
app.use(cors());
app.use(passport.initialize());


/**************************************************************************************** */

// routes apiRestFull
app.use('/', UsersRoutes)
app.use('/series', SeriesRoutes)
app.use('/music', MusicRoutes)
app.use('/live', LivesRoutes)
app.use('/movies', MoviesRoutes)

//routes not found
app.use('/*', DefaultRoutes)

export default app

