import { Router } from 'express';
import { getDependency } from '../dependency.js';

const userRouter = Router();

userRouter.get('/', (req, res) => {
    const userService = getDependency('userService');
    const users = userService.getUsers();
    res.json(users);
});

export default userRouter;