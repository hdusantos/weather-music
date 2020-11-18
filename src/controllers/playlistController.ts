import { NextFunction, Request, Response } from 'express';
import { CustomError } from '../helpers/error.handler';
import Playlist from '../services/playlist/playlist';
import { Location } from '../types/types';

const playlistController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        // Validate params
        if (req.query.city === undefined && (req.query.lat && req.query.lon) === undefined) {
            throw new CustomError(400, 'Parameter not found');
        }

        const params: Location = <Location>req.query;
        console.log(params);
        const playlistService = new Playlist(params);
        const tracks = await playlistService.getTracks();
        res.json(tracks);
    } catch (error) {
        next(error);
    }
    next();
};

export default playlistController;
