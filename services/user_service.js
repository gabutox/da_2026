import { getDependency } from '../dependency.js';

export class UserService {
    getUsers() {
        const repo = getDependency('userRepo');
        const allUsers = repo.getAll();

        // Retornar usuarios sin mostrar las passwords
        return allUsers.map(u => ({ id: u.id, user: u.user }));
    }

    addUser(user, password) {
        const repo = getDependency('userRepo');
        const allUsers = repo.getAll();

        // Validar que usuario sea obligatorio
        if (!user || typeof user !== 'string' || user.trim().length === 0) {
            return { success: false, error: 'Se requiere un nombre de usuario' };
        }

        // Validar que contraseña sea obligatoria
        if (!password || typeof password !== 'string' || password.length === 0) {
            return { success: false, error: 'Se requiere una contraseña' };
        }

        // Validar que contraseña no sea "1234"
        if (password === '1234') {
            return { success: false, error: 'La contrasena no puede ser "1234"' };
        }

        // Validar que el nombre no exista ya
        const userExists = allUsers.some(u => u.user.toLowerCase() === user.trim().toLowerCase());
        if (userExists) {
            return { success: false, error: 'El usuario ya existe' };
        }

        const newUser = repo.add(user.trim(), password);
        return { success: true, user: newUser };
    }

    deleteUser(id) {
        const repo = getDependency('userRepo');
        return repo.delete(id);
    }
}