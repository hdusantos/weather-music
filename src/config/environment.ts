// Use the environment object to set or modify the application port

const environment = {
    serverPort: process.env.SERVER_PORT || '3001',
};

const openWeatherMap = {
    baseUrl: process.env.OPEN_WEATHER_MAP_API_URL || 'http://api.openweathermap.org/data/2.5/weather',
    token: process.env.OPEN_WEATHER_MAP_API_TOKEN || 'myToken',
};

export {
    environment,
    openWeatherMap,
};
