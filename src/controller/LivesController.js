import LivesApi from '../api/LivesApi.js'

const lives = new LivesApi();

export async function getAll(req, res) {

    try{
        const livesList = await lives.getAll()
        res.status(200).json(livesList)
    }
    catch (err){
        res.status(err.estado).json(err)
    }
}



