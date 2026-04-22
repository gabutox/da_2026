export class UserMockup {
    constructor() {
        this.users = [
            { id: 1, name: 'Jorge' },
            { id: 2, name: 'Gabu' }
        ];
    }

    getAll() {
        return this.users;
    }
}