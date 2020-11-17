import axios from 'axios';
import { spotify } from '../config/environment';

interface IAuthResponse {
    accessToken: string,
    tokenType: string,
    expiresIn: number,
    scope: string
}

class Spotify {
    private token: IAuthResponse;

    constructor() {
        this.token = {
            accessToken: '',
            tokenType: '',
            expiresIn: 0,
            scope: '',
        };
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

            const newToken: IAuthResponse = <IAuthResponse>response.data;

            this.token = newToken;
            return this.token;
        } catch (error) {
            throw new Error(error.response.data.error_description);
        }
    }
}

export default Spotify;
