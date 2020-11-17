import axios from 'axios';
import { openWeatherMap } from '../config/environment';

class OpenWeatherMap {
    private baseUrl = openWeatherMap.baseUrl;

    private token = openWeatherMap.token

    private city;

    constructor(cityName: string) {
        this.city = cityName;
    }

    async getTemperature() {
        try {
            const weatherDataRequest = await axios.get(`${this.baseUrl}?q=${this.city}&appid=${this.token}`);
            return parseFloat(`${weatherDataRequest.data.main.temp}`);
        } catch (error) {
            throw new Error('Request Error');
        }
    }
}

export default OpenWeatherMap;
