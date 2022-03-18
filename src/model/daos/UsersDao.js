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

    try {
      await this.collection.updateOne(
        { email: user.email },
        {
          $set: {
            password: user.password,
            live: user.live,
            movies: user.movies,
            music: user.music,
            series: user.series
          }
        })

      return await super.getById({ email: user.email })

    } catch (err) {
      throw new CustomError(500, 'Error al modificar el user ', err)
    }
  }

  async addLive(email, live) {
    await this.collection.updateOne(
      { email: email },
      { '$push': { live: live } })
    return await super.getById({ email: email })
  }

  async delLive(email, id) {
    await this.collection.updateOne(
      { email: email },
      { '$pull': { live: { _id: { $eq: ObjectId(id) } } } })
    return await super.getById({ email: email })
  }

  async addMovie(email, movie) {
    await this.collection.updateOne(
      { email: email },
      { '$push': { movies: movie } })
    return await super.getById({ email: email })
  }

  async delMovie(email, id) {
    await this.collection.updateOne(
      { email: email },
      { '$pull': { movies: { _id: { $eq: ObjectId(id) } } } })
    return await super.getById({ email: email })
  }

  async addSerie(email, serie) {

    try {
      await this.collection.updateOne(
        { email: email },
        { '$push': { series: serie } })
      return await super.getById({ email: email })
    }
    catch (err) {
      logger.error(err)
      throw new CustomError(500, `Error to Add Series`, err)
    }
  }

  async delSerie(email, id) {
    await this.collection.updateOne(
      { email: email },
      { '$pull': { series: { _id: { $eq: ObjectId(id) } } } })
    return await super.getById({ email: email })
  }

  async addMusic(email, music) {
    await this.collection.updateOne(
      { email: email },
      { '$push': { music: music } })
    return await super.getById({ email: email })
  }

  async delMusic(email, id) {
    await this.collection.updateOne(
      { email: email },
      { '$pull': { music: { _id: { $eq: ObjectId(id) } } } })
    return await super.getById({ email: email })
  }



}
