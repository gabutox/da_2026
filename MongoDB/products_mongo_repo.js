import ProductsModel from './products_mongo.js';

// Repositorio: adapta las operaciones del servicio al modelo Mongoose
export class ProductsMongoRepo {
    async findById(id) {
        return await ProductsModel.findById(id);
    }

    async getAll() {
        return await ProductsModel.find({}, { __v: 0 });
    }

    async findByCategory(category) {
       return await ProductsModel.find({ category: category }, { __v: 0 });
    }

    async add(product) {
        const newProduct = new ProductsModel(product);
        return await newProduct.save();
    }

    async updateById(id, data) {
        return await ProductsModel.findByIdAndUpdate(id, { $set: data }, { new: true });
    }

    async deleteById(id) {
        return await ProductsModel.findByIdAndDelete(id);
    }
}
