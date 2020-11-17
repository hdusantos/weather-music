// Use the environment object to set or modify the application port

const environment = {
    serverPort: process.env.SERVER_PORT || '3001',
};

const openWeatherMap = {
    baseUrl: process.env.OPEN_WEATHER_MAP_API_URL || 'http://api.openweathermap.org/data/2.5/weather',
    token: process.env.OPEN_WEATHER_MAP_API_TOKEN || 'myTokenOpenWeatherMap',
};

const spotify = {
    baseUrl: process.env.SPOTIFY_API_URL || '',
    authUrl: process.env.SPOTIFY_AUTH_URL || 'https://accounts.spotify.com/api/token',
    clientId: process.env.SPOTIFY_API_CLIENT_ID || 'spotify_client_id',
    clientSecret: process.env.SPOTIFY_API_CLIENT_SECRET || 'spotify_client_secret',
};

export {
    environment,
    openWeatherMap,
    spotify,
};
