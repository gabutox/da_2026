import { Router } from 'express';
import { getDependency } from '../dependency.js';

const userRouter = Router();

userRouter.get('/', (req, res) => {
    const userService = getDependency('userService');
    const users = userService.getUsers();
    res.json(users);
});

userRouter.post('/', (req, res) => {
    const userService = getDependency('userService');
    const { user, password } = req.body;

    const result = userService.addUser(user, password);

    if (!result.success) {
        return res.status(400).json({ error: result.error });
    }

    res.status(201).json(result.user);
});

userRouter.delete('/:id', (req, res) => {
    const userService = getDependency('userService');
    const { id } = req.params;

    const deletedUser = userService.deleteUser(parseInt(id));

    if (!deletedUser) {
        return res.status(404).json({ error: 'User not found' });
    }

    res.json(deletedUser);
});

export default userRouter;