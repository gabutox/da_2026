import UserModel from './users_mongo.js';

// Repositorio: adapta las operaciones del servicio al modelo Mongoose
export class UserMongoRepo {
    async findOne(query) {
        return await UserModel.findOne(query);
    }

    async getAll() {
        return await UserModel.find({}, { password: 0, __v: 0 });
    }

    async findByUsername(username) {
        return await UserModel.findOne({ user_name: username }, { password: 0, __v: 0 });
    }

    async add(user) {
        const newUser = new UserModel(user);
        return await newUser.save();
    }

    async updateByUsername(username, data) {
        return await UserModel.findOneAndUpdate(
            { user_name: username },
            { $set: data },
            { new: true, fields: { password: 0, __v: 0 } }
        );
    }

    async deleteByUsername(username) {
        return await UserModel.findOneAndDelete({ user_name: username });
    }
}
