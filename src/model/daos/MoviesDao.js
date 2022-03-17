import ContainerDao from "./ContainerDao.js";


export default class MoviesDao extends ContainerDao{
    constructor(){
        super('movies');
    }
}
