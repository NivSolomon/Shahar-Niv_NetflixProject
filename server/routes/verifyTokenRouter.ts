import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import { verifyToken } from '../controllers/verifyTokenController';

const verifyTokenRouter = express.Router();

verifyTokenRouter.get('/', expressAsyncHandler(verifyToken));

export default verifyTokenRouter;