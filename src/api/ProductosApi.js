import ProductosDao from '../model/daos/ProductosDao.js';

export default class ProductosApi {

    constructor() {
        this.productosDao = new ProductosDao();
    }

    async getProductos() {
        const productosObj = await this.productosDao.getAll();
        return productosObj;
    }   

    async getProducto(codigo) {
        const productosObj = await this.productosDao.getById({codigo: codigo});
        return productosObj;
    }   

    async addProducto(objeto) {
        const productosObj = await this.productosDao.add(objeto);
        return productosObj;
    }   

    async putProducto(codigo, objeto) {
        await this.productosDao.deleteById({codigo: codigo});
        const productosObj = await this.productosDao.add(objeto);
        return productosObj;
    }   

    async deleteProducto(codigo) {
        const productosObj = await this.productosDao.deleteById({codigo: codigo});
        return productosObj;
    }       
    
}
