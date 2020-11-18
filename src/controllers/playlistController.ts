import { Request, Response } from 'express';
import Playlist from '../services/playlist/playlist';
import { Location } from '../types/types';

const playlistController = async (req: Request, res: Response) => {
    // Validate params
    if (req.query.city === undefined) {
        return res.status(400).send('Parameter city not found');
    }

    const params: Location = { city: `${req.query.city}` };

    const playlistService = new Playlist(params);
    const tracks = await playlistService.getTracks();

    return res.json(tracks);
};

export default playlistController;
