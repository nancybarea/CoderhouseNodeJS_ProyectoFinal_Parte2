import config from '../../../config/config.js'
import MongoCarritosDao from './Mongo/CarritosDao.js';
import FirebaseCarritosDao from './Firebase/CarritosDao.js';

let baseDeDatos = config.TIPO_PERSISTENCIA;
let carrito;

if (baseDeDatos === "Mongo"){
    carrito = class CarritosGeneralDao extends MongoCarritosDao {
        constructor() {
            super()
        }
    }
}else{
    carrito =  class CarritosGeneralDao extends FirebaseCarritosDao {
        constructor() {
            super()
        }
    }
}

export default carrito;
