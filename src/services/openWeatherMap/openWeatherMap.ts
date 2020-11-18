import axios from 'axios';
import { openWeatherMap } from '../../config/environment';
import { Location } from '../../types/types';

class OpenWeatherMap {
    private location: Location;

    constructor(location: Location) {
        this.location = location;
    }

    async getTemperatureCelsius() {
        const query = this.location.city ? `q=${this.location.city}` : `lat=${this.location.lat}&lon=${this.location.lon}`;
        try {
            const weatherDataRequest = await axios.get(`${openWeatherMap.baseUrl}?${query}&units=metric&appid=${openWeatherMap.token}`);
            return parseFloat(`${weatherDataRequest.data.main.temp}`);
        } catch (error) {
            throw new Error(error);
        }
    }
}

export default OpenWeatherMap;
