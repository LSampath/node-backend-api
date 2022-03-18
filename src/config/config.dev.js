const config = {};

config.weather = {};
config.weather.api_key = 'c46e06b4b6c7d2262bc82213948d6c78';
config.weather.one_call_api_url = 'https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={api_key}';

module.exports = config;