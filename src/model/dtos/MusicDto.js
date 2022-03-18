export default class MusicDto {

    _id;
    name;
    url;
    thubmails;

    constructor({ _id, name, url, thubmails}) {

        if (_id === undefined) {
            this._id = undefined;
        }
        else {
            this._id = _id;
        }

        this.name = name;
        this.url = url;
        this.thubmails = thubmails;
    }

    get() {
        return {
            _id: this._id,
            name: this.name,
            url: this.url,
            thubmails: this.thubmails,
        }
    }


    getForUser() {

        return {
            _id: this._id,
            name: this.name,
            url: this.url,
            thubmails: this.thubmails,
            date: Date.now(),
        }
    }

}