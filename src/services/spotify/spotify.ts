import axios from 'axios';
import { spotify } from '../../config/environment';
import { CustomError } from '../../helpers/error.handler';

class Spotify {
    private token: string;

    constructor() {
        this.token = '';
    }

    async auth() {
        try {
            const response = await axios({
                url: spotify.authUrl,
                method: 'post',
                params: {
                    grant_type: 'client_credentials',
                },
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                auth: {
                    username: spotify.clientId,
                    password: spotify.clientSecret,
                },
            });

            this.token = response.data.access_token;
            return true;
        } catch (error) {
            throw new CustomError(500, 'error connecting with spotify');
        }
    }

    async getPlaylistTracks(playlistID: string) {
        const urlPlaylistTracks = `https://api.spotify.com/v1/playlists/${playlistID}/tracks?market=ES&fields=items(track(name%2Chref%2Calbum(name%2Chref)))`;

        try {
            const tracks = await axios.get(urlPlaylistTracks, {
                headers: {
                    Accept: 'application/json',
                    Authorization: `Bearer ${this.token}`,
                },
            });
            return tracks;
        } catch (error) {
            throw new CustomError(500, 'error fetching playlist');
        }
    }
}

export default Spotify;
