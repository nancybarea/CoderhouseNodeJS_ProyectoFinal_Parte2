import ContainerDao from './ContainerDao.js';


export default class UsersDao extends ContainerDao {

  constructor() {
    super('users')
  }

  async getByEmail(email) {
    return super.getById({ email: email })
  }

  //encrypt and modify the password in the base 
  async update(user) {
    //modify the password in the base
    await this.collection.updateOne(
      { email: user.email },
      { $set: { password: user.password } })

    return await super.getById({ email: user.email })
  }

  
}
