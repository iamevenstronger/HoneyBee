'use strict';

var Logger = require('./../../logger');
const logger = new Logger();

function handler() {
    logger.info('Demo module initialized!');
    this.create = function (request, reply) {
        reply({ success: true, message: "User data inserted!" });
    }
    this.update = function (request, reply) {
        reply({ success: true, message: "User data updated!"});
    }
}

module.exports = handler ;