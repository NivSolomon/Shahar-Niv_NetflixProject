import express from 'express';
import { isAuth } from '../utils';
import expressAsyncHandler from 'express-async-handler';
import { SaveMyList, getAllList } from '../controllers/myListController';

const myListRouter = express.Router();
myListRouter.post('/', isAuth, expressAsyncHandler(getAllList));
myListRouter.post('/savelist', isAuth, expressAsyncHandler(SaveMyList));

export default myListRouter;