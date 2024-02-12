import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import { getAllMovies, getMovieById } from '../controllers/movieController';

const movieRouter = express.Router();

movieRouter.get('/:id', expressAsyncHandler(getMovieById));
movieRouter.get('/', expressAsyncHandler(getAllMovies));


export default movieRouter;