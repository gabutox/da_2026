import SessionModel from './sessions_mongo.js';

// Repositorio: adapta las operaciones del servicio al modelo Mongoose
export class SessionMongoRepo {
    async findOne(query) {
        return await SessionModel.findOne(query);
    }

    async create(sessionData) {
        const session = new SessionModel(sessionData);
        return await session.save();
    }
}
