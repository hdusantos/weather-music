import { Router } from 'express';
import PlaylistController from '../controllers/playlistController';

const routerPlaylist = Router();

routerPlaylist.get('/', async (req, res) => {
    // Validate params
    if (req.query.city === undefined) {
        return res.status(400).send('Parameter city not found');
    }

    const city: string = `${req.query.city}`;

    const playlistCtrl = new PlaylistController(city);
    const playlist = await playlistCtrl.getPlaylist();

    res.send(`${playlist}`);
});

export default routerPlaylist;
