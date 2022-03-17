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

  async addlive(email, live) {
    await this.collection.updateOne(
      { email: email },
      { '$push': { live: live } })
    return await super.getById({ email: email })
  }

  async dellive(email, live) {
    await this.collection.updateOne(
      { email: email },
      { '$pull': { live: { $eq: live } } })
    return await super.getById({ email: email })
  }

  async addmovie(email, movie) {
    await this.collection.updateOne(
      { email: email },
      { '$push': { movie: movie } })
    return await super.getById({ email: email })
  }

  async delmovies(email, movie) {
    await this.collection.updateOne(
      { email: email },
      { '$pull': { movies: { $eq: movie } } })
    return await super.getById({ email: email })
  }

  async addSeries(email, serie) {
    await this.collection.updateOne(
      { email: email },
      { '$push': { series: serie } })
    return await super.getById({ email: email })
  }

  async delSeries(email, serie) {
    await this.collection.updateOne(
      { email: email },
      { '$pull': { series: { $eq: serie } } })
    return await super.getById({ email: email })
  }

  async addRadio(email, radio) {
    await this.collection.updateOne(
      { email: email },
      { '$push': { radio: radio } })
    return await super.getById({ email: email })
  }

  async delradio(email, radio) {
    await this.collection.updateOne(
      { email: email },
      { '$pull': { radio: { $eq: radio } } })
    return await super.getById({ email: email })
  }



}
