import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import {signUp, signIn, getUserById, getAllUsers} from '../controllers/userController';

const userRouter = express.Router();

userRouter.post('/signin', expressAsyncHandler(signIn));
userRouter.post('/signup', expressAsyncHandler(signUp));
userRouter.get('/:id', expressAsyncHandler(getUserById));
userRouter.get('/', expressAsyncHandler(getAllUsers));


export default userRouter;