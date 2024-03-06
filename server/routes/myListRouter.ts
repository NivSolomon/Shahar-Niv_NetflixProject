import express from 'express';
import { isAuth } from '../utils';
import expressAsyncHandler from 'express-async-handler';
import { getAllList } from '../controllers/myListController';

const myListRouter = express.Router();
myListRouter.post('/', isAuth, expressAsyncHandler(getAllList));

export default myListRouter;