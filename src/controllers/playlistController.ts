import { Request, Response } from 'express';
import Playlist from '../services/playlist/playlist';

const playlistController = async (req: Request, res: Response) => {
    // Validate params
    if (req.query.city === undefined) {
        return res.status(400).send('Parameter city not found');
    }

    const city: string = `${req.query.city}`;

    const playlistService = new Playlist(city);
    const tracks = await playlistService.getTracks();

    return res.json(tracks);
};

export default playlistController;
