const express = require('express');
const weatherService = require('../service/weather.service')

const router = express.Router();

router.get('/', (req, res) => {
    const latitude = req.query['lat'];
    const longitude = req.query['lon'];

    weatherService.getWeatherResults(latitude, longitude).then((result) => {
        console.log(result);
        res.send(result);
    }).catch((error) => {
        console.log(error);
    })
});

module.exports = router;
