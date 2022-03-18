const axios = require('axios');
const config = require('../config/configurations');

exports.getWeather = async (latitude, longitude) => {
    const apiKey = config.weather.api_key;
    let url = config.weather.one_call_api_url;

    url = url.replace('{lat}', latitude).replace('{lon}', longitude);
    url = url.replace('{api_key}', apiKey);

    return axios.get(url);
}