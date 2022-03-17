import MusicDao from '../model/daos/MusicDao.js';

export default class MusicApi {

    constructor() {
        this.musicDao = new MusicDao();
    }

    async getAll() {
        const musicObj = await this.musicDao.getAll();
        return musicObj;
    }   

}
