const DEV = 'dev';
const PROD = 'prod';

let config_data;

const environment = process.env.NODE_ENV || DEV;

switch (environment) {
    case PROD:
        config_data = require('./config_prod');
        break;
    case DEV:
    default:
        config_data = require('./config_dev');
}

module.exports = config_data;


