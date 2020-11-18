import express from 'express';
import cors from 'cors';
import bodyParse from 'body-parser';
import logger from 'morgan';
import routerPlaylist from './routes/playlistRouter';
import { errorHandler } from './helpers/error.handler';

const app = express();

app.use(cors());
app.use(bodyParse.json());
app.use(logger('dev'));

app.use('/playlist', routerPlaylist);

app.use(errorHandler);

export default app;
