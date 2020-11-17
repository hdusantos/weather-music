import { Router } from 'express';
import PlaylistController from '../controllers/playlistController';

const routerPlaylist = Router();

routerPlaylist.get('/', async (req, res) => {
    const response = await PlaylistController.getTemperature('brasilia');
    res.send(response);
});

export default routerPlaylist;
