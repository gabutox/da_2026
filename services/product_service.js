import { getDependency } from "../dependency.js";

export class ProductService {
    constructor() {
        this.productRepo = getDependency("productRepo");
    }

    // GET /products
    async getList() {
        return await this.productRepo.getAll();
    }

    // GET /products/id
    async getById(id) {
        return await this.productRepo.findById(id);
    }

    // GET /products/category
    async getByCategory(category) {
        return await this.productRepo.findByCategory(category);
    }

    // POST /products
    async add(product) {
        if (!product.name)
            throw new Error("El nombre del producto es obligatorio");

        if (!product.brand)
            throw new Error("La marca del producto es obligatoria");

        if (!product.price)
            throw new Error("El precio del producto es obligatorio");

        return await this.productRepo.add(product);
    }

    // DELETE /products/id
    async deleteById(id) {
        return await this.productRepo.deleteById(id);
    }

    // PATCH /products/id
    async updateById(id, data) {
        if (data.price !== undefined && data.price <= 0)
            throw new Error("El precio debe ser mayor a 0");
        return await this.productRepo.updateById(id, data);
    }
}