export default class ProductoDto {

    _id;
    codigo;
    fechaHora;
    nombre;
    descripcion;
    precio;
    imagenURL;
    stock;

    constructor({ _id, codigo, fechaHora, nombre, descripcion, precio, imagenURL, stock}) {

        if (_id === undefined) {
            this._id = undefined;
        }
        else {
            this._id = _id;
        }

        this.codigo = codigo;
        this.fechaHora = fechaHora;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
        this.imagenURL = imagenURL;
        this.stock = stock;
    }

    get() {
        return {
            _id: this._id,
            codigo: this.codigo,
            fechaHora: this.fechaHora,
            nombre: this.nombre,
            descripcion: this.descripcion,
            precio: this.precio,
            imagenURL: this.imagenURL,
            stock: this.stock,
        }
    }

}