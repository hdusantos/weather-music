import { Router } from 'express';
import PlaylistController from '../controllers/playlistController';

const routerPlaylist = Router();

routerPlaylist.get('/', async (req, res) => {
    // Validate params
    if (req.query.city === undefined) { res.send('error'); }

    const city: string = `${req.query.city}`;

    const playlistCtrl = new PlaylistController(city);
    const playlist = await playlistCtrl.getPlaylist();

    res.send(`${playlist}`);
});

export default routerPlaylist;
