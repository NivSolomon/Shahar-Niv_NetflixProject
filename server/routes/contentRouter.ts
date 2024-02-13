import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import { getAllContents, getAllMovies, getAllSerieses, getContentById } from '../controllers/contentController';
import { isAuth } from '../utils';

const contentRouter = express.Router();

contentRouter.get('/', isAuth, expressAsyncHandler(getAllContents));
contentRouter.get('/movies', isAuth, expressAsyncHandler(getAllMovies));
contentRouter.get('/serieses', isAuth, expressAsyncHandler(getAllSerieses));
contentRouter.get('/:id', isAuth, expressAsyncHandler(getContentById));


export default contentRouter;