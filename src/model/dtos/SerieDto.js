export default class SerieDto {

    _id;
    name;
    url;
    thumbnail;

    constructor({ _id, name, url, thumbnail}) {

        if (_id === undefined) {
            this._id = undefined;
        }
        else {
            this._id = _id;
        }

        this.name = name;
        this.url = url;
        this.thumbnail = thumbnail;
    }

    get() {
        return {
            _id: this._id,
            name: this.name,
            url: this.url,
            thumbnail: this.thumbnail,
        }
    }


    getForUser() {

        return {
            _id: this._id,
            name: this.name,
            url: this.url,
            thumbnail: this.thumbnail,
            date: Date.now(),
        }
    }

}