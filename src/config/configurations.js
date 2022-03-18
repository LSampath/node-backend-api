const DEV = 'dev';
const PROD = 'prod';

let configData;

const environment = process.env.NODE_ENV || DEV;

switch (environment) {
    case PROD:
        configData = require('./config.prod');
        break;
    case DEV:
    default:
        configData = require('./config.dev');
}

module.exports = configData;


