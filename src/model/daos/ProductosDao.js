import config from '../../../config/config.js'
import MongoProductosDao from './Mongo/ProductosDao.js';
import FirebaseProductosDao from './Firebase/ProductosDao.js';

let baseDeDatos = config.TIPO_PERSISTENCIA;
let producto;

if (baseDeDatos === "Mongo"){
    producto = class ProductosGeneralDao extends MongoProductosDao {
        constructor() {
            super()
        }
    }
}else{
    producto =  class FirebaseGeneralDao extends FirebaseProductosDao {
        constructor() {
            super()
        }
    }
}

export default producto;

