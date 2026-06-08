import {getDependency} from "../dependency.js";

export class SessionService {
    constructor() {
        this.sessionRepo = getDependency("sessionRepo");
    }

    async getSessionByToken(token) {
        return await this.sessionRepo.findOne({ authorizationToken: token });
    }
}