import { Router } from 'express';
import playlistController from '../controllers/playlistController';

const routerPlaylist = Router();

routerPlaylist.get('/', playlistController);

export default routerPlaylist;
