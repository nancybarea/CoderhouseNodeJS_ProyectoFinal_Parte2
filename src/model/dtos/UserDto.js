import bCrypt from 'bcrypt';

export default class UsuarioDto {

    email;
    password;
    firstname;
    lastname;
    avatar;
    preference;

    constructor({ _id, email, password, firstname, lastname, avatar, preference }) {
        if (_id === undefined) {
            this._id = undefined;
            this.preference = [];
            this.password = createHash(password)
        }
        else {
            this._id = _id;
            this.preference = preference;
            this.password = password;
        }

        this.email = email;
        this.firstname = firstname;
        this.lastname = lastname;
        this.avatar = avatar;
    }

    get() {
        return {
            email:this.email,
            firstname:this.firstname,
            lastname:this.lastname,
            avatar: this.avatar,
            preference: this.preference
    }
    }


    isValidPassword(password) {
        return bCrypt.compareSync(password, this.password);
    }

    setNewPassword(password) {
        this.password = createHash(password)
    }
    
}

function createHash(password) {
    return bCrypt.hashSync(password, bCrypt.genSaltSync(10), null);
}

