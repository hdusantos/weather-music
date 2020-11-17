import axios from 'axios';

export default class PlaylistController {
    static async getTemperature(cityName: string) {
        const temperature = await axios.get('http://api.openweathermap.org/data/2.5/weather?q=brasilia&appid=b77e07f479efe92156376a8b07640ced');
        console.log(temperature);
        return `${cityName}: Temperature is ${temperature.data.main.temp}`;
    }
}
