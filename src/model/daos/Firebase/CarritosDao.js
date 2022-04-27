import ContainerDao from './ContainerDao.js';


export default class CarritosDao extends ContainerDao {

  constructor() {
    super('carritos')
  }

  async updatePushProductoAlCarrito(idCarrito, objProductoNuevo) {
    try {
      await this.collection.updateOne(
        { idCarrito: idCarrito },
        { '$push': { productos: objProductoNuevo } })
      return await super.getById({ idCarrito: idCarrito })
    }
    catch (err) {
      throw new CustomError(500, `Error al agregar un producto al carrito`, err)
    }
  }

  async updatePullProductoAlCarrito(idCarrito, codigoProducto) {
    try {
      await this.collection.updateOne(
        { idCarrito: idCarrito },
        { '$pull': { productos: { "codigoProducto" : { $eq: codigoProducto } } } })
      return await super.getById({ idCarrito: idCarrito })
    }
    catch (err) {
      throw new CustomError(500, `Error al agregar un producto al carrito`, err)
    }
  }

}
