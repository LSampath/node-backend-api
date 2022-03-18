const express = require('express');
const weatherRoute = require('./route/weather');

const app = express();

app.use('/weather', weatherRoute);

app.get('/', (req, res) => {
    res.send('Welcome to TravelMap API..');
});

app.listen(3000, () => console.log('server ready..'));