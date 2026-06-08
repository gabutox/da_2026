import { getDependency } from "../dependency.js";
import bcrypt from "bcrypt";

export class UserService {
    constructor() {
        this.userRepo = getDependency("userRepo");
    }

    // GET /users
    async getList() {
        return await this.userRepo.getAll();
    }

    // GET /users/:username
    async getByUsername(username) {
        return await this.userRepo.findByUsername(username);
    }

    // POST /users
    async add(user) {
        if (!user.user_name)
            throw new Error("El nombre de usuario es obligatorio");

        if (!user.password)
            throw new Error("La contraseña es obligatoria");

        const existing = await this.userRepo.findOne({ user_name: user.user_name });
        if (existing)
            throw new Error("El nombre de usuario ya existe");

        user.password = bcrypt.hashSync(user.password, 10);

        return await this.userRepo.add(user);
    }

    // DELETE /users/:username
    async deleteByUsername(username) {
        return await this.userRepo.deleteByUsername(username);
    }

    // PATCH /users/:username
    async updateByUsername(username, data) {
        if (data.password)
            data.password = bcrypt.hashSync(data.password, 10);

        return await this.userRepo.updateByUsername(username, data);
    }
}