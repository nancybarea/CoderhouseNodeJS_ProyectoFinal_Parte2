import MoviesApi from "../api/MoviesApi.js";

const movies = new MoviesApi();

export async function getAll(req, res) {
    try {
        const moviesArr = await movies.getAll();
        res.status(200).json(moviesArr);


    } catch (error) {
        res.status(error.estado).json(error);
    }
}


