const express = require('express');
const mapRepository = require('../repository/map.repository')

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Map API is under development..');
});

module.exports = router;
