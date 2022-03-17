
export default class SeriesDto {

    codigo;
    name;
    url;
    thubmails;
    date;

    constructor({ _id, codigo, name, url, thubmails, date }) {
        if (_id === undefined) {
            this._id = undefined;
        }
        else {
            this._id = _id;
        }

        this.codigo = codigo;
        this.name = name;
        this.url = url;
        this.thubmails = thubmails;
        this.date = date;
    }

    get() {
       
        return {
            codigo:this.codigo,
            name:this.name,
            url:this.url,
            thubmails:this.thubmails,
            date: this.date
        }
    }

    
}


