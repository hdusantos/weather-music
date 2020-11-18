import { Request, Response } from 'express';
import Playlist from '../services/playlist/playlist';
import { Location } from '../types/types';

const playlistController = async (req: Request, res: Response) => {
    // Validate params
    if (req.query.city === undefined && (req.query.lat && req.query.lon) === undefined) {
        return res.status(404).send('Parameter not found');
    }

    const params: Location = <Location>req.query;
    console.log(params);
    const playlistService = new Playlist(params);
    const tracks = await playlistService.getTracks();

    return res.json(tracks);
};

export default playlistController;
