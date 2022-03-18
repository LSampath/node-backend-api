const weatherRepository = require('../repository/weather.repository');

exports.getWeatherResults = async (latitude, longitude) => {
    if (latitude && longitude) {
        const results = await weatherRepository.getWeather(latitude, longitude);
        if (results && results.data)
        {
            const data = results.data;
            const weather = {};

            weather.timezone = data['timezone_offset'];
            weather.time = data['current']['dt'];
            weather.description = data['current']['weather'][0]['description'];
            weather.icon = data['current']['weather'][0]['icon'];

            return weather;
        }
    }
}