export class UserMockup {
    constructor() {
        this.users = [
            { id: 1, user: 'Jorge', password: 'Pass123' },
            { id: 2, user: 'Gabu', password: 'Pass456' }
        ];
        this.nextId = 3;
    }

    getAll() {
        return this.users;
    }

    add(user, password) {
        const newUser = { id: this.nextId++, user, password };
        this.users.push(newUser);
        return newUser;
    }

    delete(id) {
        const index = this.users.findIndex(u => u.id === id);
        if (index === -1) {
            return null;
        }
        const deletedUser = this.users[index];
        this.users.splice(index, 1);
        return deletedUser;
    }
}