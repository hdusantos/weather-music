import OpenWeatherMap from '../services/openWeatherMap';
import Spotify from '../services/spotify';

class PlaylistController {
    private city;

    constructor(cityName: string) {
        this.city = cityName;
    }

    public getPlaylist() {
        const temperature = this.getTemperature();

        return temperature;
    }

    private async getTemperature() {
        const openWeatherMap = new OpenWeatherMap(this.city);
        const temperatureCelsius = await openWeatherMap.getTemperatureCelsius()
            .catch((err) => { console.log(err); });
        const spotify = new Spotify();
        await spotify.auth()
            .catch((err) => { console.log(err); });

        const listTracks = await spotify.getPlaylistTracks('rock');

        return listTracks.data;
    }
}

export default PlaylistController;
