import SeriesApi from '../api/SeriesApi.js'

const series = new SeriesApi();

export async function getAll(req, res) {

    try{
        const seriesList = await series.getAll()
        res.status(200).json(seriesList)
    }
    catch (err){
        res.status(err.estado).json(err)
    }
}



