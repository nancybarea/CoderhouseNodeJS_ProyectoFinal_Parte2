import { MongoClient, ObjectId } from 'mongodb';
import CustomError from '../../../errores/CustomError.js'

const mongo_url = process.env.MONGO_URL
const base = process.env.MONGO_BASE

const client = new MongoClient(mongo_url, { serverSelectionTimeOutMS: 5000 });
await client.connect();

export default class ContainerDao {

    constructor(collection) {
        this.collectionName = collection
        this.collection = client.db(base).collection(collection)
    }

    async getAll() {
        try {
            const array = await this.collection.find().toArray()
            return array
        }
        catch (err) {
            throw new CustomError(500, `Error getting all records in collection ${this.collectionName}`, err)
        }
    }

    async getById(query) {
        let wanted
        try {
            wanted = await this.collection.findOne(query);
        }
        catch (err) {
            throw new CustomError(500, `Error when obtaining a Document by code in the collection ${this.collectionName}`, err)
        }

        if (!wanted) {
            throw new CustomError(404, `Document not found with that ${JSON.stringify(query)}`)
        }
        return wanted
    }

    async getByObjectId(idCarrito) {
        let wanted
        try {
            wanted = await this.collection.find({ "_id": ObjectId(idCarrito) } );
            console.log(wanted)
        }
        catch (err) {
            throw new CustomError(500, `Error when obtaining a Document by code in the collection ${this.collectionName}`, err)
        }

        if (!wanted) {
            throw new CustomError(404, `Document not found with that ${JSON.stringify(query)}`)
        }
        return wanted
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

    async update(query) {
        try {
            const { insertedId } = await this.collection.updateOne(query)
            return insertedId;
        }
        catch (err) {
            throw new CustomError(500, `Error update mongo document to collection ${this.collectionName}`, err)
        }
    }
   
   
    async deleteById(query) {
        await this.collection.deleteOne(query, function (err, obj) {
            if (err) {
                throw new CustomError(500, `Error getting all documents in collection ${this.collectionName}`, err)
            }
        });
    }

    async deleteByObjectId(idCarrito) {
        let wanted
        try {
            wanted = await this.collection.deleteOne({ "_id": ObjectId(idCarrito) });
        }
        catch (err) {
            throw new CustomError(500, `Error when obtaining a Document by code in the collection ${this.collectionName}`, err)
        }
        if (!wanted) {
            throw new CustomError(404, `Document not found with that ${JSON.stringify(_id)}`)
        }
        return wanted
    }

}
