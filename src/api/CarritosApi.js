import CarritosDao from '../model/daos/CarritosDao.js';

export default class CarritosApi {

    constructor() {
        this.carritosDao = new CarritosDao();
    }

    async getCarritos() {
        const carritosObj = await this.carritosDao.getAll();
        return carritosObj;
    }   
    
    async getProductosDelCarrito(idCarrito) {
        const carritosObj = await this.carritosDao.getById({idCarrito: idCarrito});
       return carritosObj;
    }     

    async addCarrito(objeto) {
        const carritosObj = await this.carritosDao.add(objeto);
    //    await this.carritosDao.update(
    //        { "idCarrito": "" },
    //        { $set : {"idCarrito": carritosObj.toString() } })
        return carritosObj;
    }  

    async addProductoAlCarrito(idCarrito, objProductoNuevo) {
        const carritosObj = await this.carritosDao.updatePushProductoAlCarrito(idCarrito, objProductoNuevo);
       return carritosObj;
    }    

    async deleteProductoAlCarrito(idCarrito, codigoProducto) {
        const carritosObj = await this.carritosDao.updatePullProductoAlCarrito(idCarrito, codigoProducto);
       return carritosObj;
    }    

    async deleteCarrito(idCarrito) {
        const carritosObj = await this.carritosDao.deleteById({idCarrito: idCarrito});
        return carritosObj;
    }       
    
}
