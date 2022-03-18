const express = require('express');
const weather_service = require('../service/weather')

const router = express.Router();

router.get('/', (req, res) => {
    res.send('weather result API is under development..');
});

module.exports = router;
