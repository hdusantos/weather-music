import axios from 'axios';
import { openWeatherMap } from '../../config/environment';
import { CustomError } from '../../helpers/error.handler';
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
            const { cod, message } = error.response.data;
            throw new CustomError(cod, message);
        }
    }
}

export default OpenWeatherMap;
