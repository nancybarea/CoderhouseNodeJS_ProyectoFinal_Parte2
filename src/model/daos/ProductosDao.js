import config from '../../../config/config.js'
import MongoProductosDao from './Mongo/ProductosDao.js';

let baseDeDatos = config.TIPO_PERSISTENCIA;
let producto;

if (baseDeDatos == "Mongo"){
    producto = class ProductosGeneralDao extends MongoProductosDao {
        constructor() {
            super()
        }
    }
}else{
    producto =  class ProductosGeneralDao extends MongoProductosDao {
        constructor() {
            super()
        }
    }
}

export default producto;

