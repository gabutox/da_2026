import { Router } from 'express';
import userRouter from './user_router.js';

const mainRouter = Router();

// Delegamos todo lo que vaya a /users al userRouter
mainRouter.use('/users', userRouter);

export default mainRouter;