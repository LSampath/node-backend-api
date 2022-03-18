const express = require('express');
const weatherRoute = require('./src/route/weather');
const mapRoute = require('./src/route/map');
const weatherRoute = require('./src/route/weather.route');

const app = express();

app.use('/weather', weatherRoute);
app.use('/map', mapRoute);

app.get('/', (req, res) => {
    res.send('Welcome to TravelMap API..');
});

app.listen(3000, () => console.log('server ready..'));