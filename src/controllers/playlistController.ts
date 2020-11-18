import OpenWeatherMap from '../services/openWeatherMap';
import Spotify from '../services/spotify';

class PlaylistController {
    private city;

    constructor(cityName: string) {
        this.city = cityName;
    }

    public getTracks() {
        return this.run();
    }

    private async run() {
        const openWeatherMap = new OpenWeatherMap(this.city);
        const temperatureCelsius = await openWeatherMap.getTemperatureCelsius()
            .catch((err) => { console.log(err); });

        const playlistID = this.getPlaylistID(temperatureCelsius as number);

        const spotify = new Spotify();
        await spotify.auth()
            .catch((err) => { console.log(err); });

        const listTracks = await spotify.getPlaylistTracks(playlistID);

        return listTracks.data;
    }

    private getPlaylistID(temperature: number) {
        // tracks for party
        if (temperature > 30) { return '37i9dQZF1DXaXB8fQg7xif'; }
        // pop music tracks
        if (temperature >= 15 && temperature <= 30) { return '37i9dQZF1DX1ngEVM0lKrb'; }
        // rock music tracks
        if (temperature >= 10 && temperature <= 14) { return '37i9dQZF1DWXRqgorJj26U'; }
        // classical music tracks
        return '37i9dQZF1DWWEJlAGA9gs0';
    }
}

export default PlaylistController;
