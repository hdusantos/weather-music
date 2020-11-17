import OpenWeatherMap from '../services/openWeatherMap';

class PlaylistController {
    private city;

    constructor(cityName: string) {
        this.city = cityName;
    }

    public async getPlaylist() {
        const openWeatherMap = new OpenWeatherMap(this.city);
        const temperature = await openWeatherMap.getTemperature();
        return temperature;
    }
}

export default PlaylistController;
