import axios from 'axios';
import { openWeatherMap } from '../../config/environment';

class OpenWeatherMap {
    private baseUrl = openWeatherMap.baseUrl;

    private token = openWeatherMap.token

    private city;

    constructor(cityName: string) {
        this.city = cityName;
    }

    async getTemperatureCelsius() {
        try {
            const weatherDataRequest = await axios.get(`${this.baseUrl}?q=${this.city}&units=metric&appid=${this.token}`);
            return parseFloat(`${weatherDataRequest.data.main.temp}`);
        } catch (error) {
            throw new Error(error);
        }
    }
}

export default OpenWeatherMap;
