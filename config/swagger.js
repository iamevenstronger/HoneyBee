'strict';

const Pack = require('./../package');

module.exports = swagger() ; 

function swagger() {
    return {
        info: {
            'title': 'HoneyBee API Documentation',
            'version': Pack.version,
        }
    };
};