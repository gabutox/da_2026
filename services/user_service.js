import { getDependency } from '../dependency.js';

export class UserService {
    getUsers() {
        // Obtenemos el repositorio desde el gestor, no lo importamos directo
        const repo = getDependency('userRepo');
        return repo.getAll();
    }
}