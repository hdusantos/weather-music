import OpenWeatherMap from '../services/openWeatherMap';

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
        const temperatureCelsius: number = await openWeatherMap.getTemperatureCelsius();

        return temperatureCelsius;
    }
}

export default PlaylistController;
