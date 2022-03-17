import LivesDao from '../model/daos/LivesDao.js';
//import SeriesDto from '../model/dtos/SeriesDto.js';

export default class LivesApi {

    constructor() {
        this.livesDao = new LivesDao();
    }

    async getAll() {
        const livesObj = await this.livesDao.getAll();
        return livesObj;
    }   

}


