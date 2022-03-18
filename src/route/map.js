const express = require('express');
const map_repo = require('../repository/map')

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Map API is under development..');
});

module.exports = router;
