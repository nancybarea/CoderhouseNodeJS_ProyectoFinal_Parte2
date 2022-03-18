import { MongoClient, ObjectId } from 'mongodb';
import logger from '../../logger.js'
import CustomError from '../../errores/CustomError.js'

const mongo_url = process.env.MONGO_URL
const base = process.env.MONGO_BASE

const client = new MongoClient(mongo_url, { serverSelectionTimeOutMS: 5000 });
await client.connect();

export default class ContainerDao {

    constructor(collection) {
        this.collectionName = collection
        this.collection = client.db(base).collection(collection)
        logger.info(`Mongo Base:${base} collection: ${collection} instantiated`)
    }

    async getAll() {
        try {
            const array = await this.collection.find().toArray()
            return array
        }
        catch (err) {
<<<<<<< HEAD
            throw new CustomError(500, `Error al obtener todos los registros de la coleccion ${this.collectionName}`, err)
=======
            throw new CustomError(500, `Error getting all records in collection ${this.collectionName}`, err)
>>>>>>> b619f187bfc459d8e4be39d28e4b99eec9dd3c00
        }
    }

    async getById(query) {

        let wanted
        try {
            wanted = await this.collection.findOne(query);
        }
        catch (err) {
            logger.error(err)
            throw new CustomError(500, `Error when obtaining a Document by code in the collection ${this.collectionName}`, err)
        }

        if (!wanted) {
            throw new CustomError(404, `Document not found with that ${JSON.stringify(query)}`)
        }
        return wanted
    }

    async getByObjectId(_id) {
        let obj = {_id:ObjectId(_id)}
        let wanted
        try {
            wanted = await this.collection.findOne(obj);
        }
        catch (err) {
            logger.error(err)
            throw new CustomError(500, `Error when obtaining a Document by code in the collection ${this.collectionName}`, err)
        }

        if (!wanted) {
            throw new CustomError(404, `Document not found with that ${JSON.stringify(query)}`)
        }
        return wanted
    }

    async listByQuery(query){
        try {
            const array = await this.collection.find(query).toArray()
            return array
        }
        catch (err) {
            throw new CustomError(500, `Error getting all records in collection ${this.collectionName}`, err)
        }

    }


    async add(data) {
        try {
            const { insertedId } = await this.collection.insertOne(data)
            return insertedId;
        }
        catch (err) {
            throw new CustomError(500, `Error adding mongo document to collection ${this.collectionName}`, err)
        }
    }

    async deleteById(query) {
        await this.collection.deleteOne(query, function (err, obj) {
            if (err) {
                throw new CustomError(500, `Error getting all documents in collection ${this.collectionName}`, err)
            }
        });
    }

}
