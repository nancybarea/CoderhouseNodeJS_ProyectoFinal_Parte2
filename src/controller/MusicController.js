import MusicApi from '../api/MusicApi.js'

const music = new MusicApi();

export async function getAll(req, res) {

    try{
        const musicList = await music.getAll()
        res.status(200).json(musicList)
    }
    catch (err){
        res.status(err.estado).json(err)
    }
}

