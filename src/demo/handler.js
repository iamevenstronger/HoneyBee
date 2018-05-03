'use strict';

var Logger = require('./../../logger');
var db = require('./../../db');
const logger = new Logger();
function handler() {
    logger.info('Demo module initialized!');
    this.create = function (request, reply) {
        logger.info('Create module success');
        reply({ statusCode:200,success: true, message: "User data inserted!" });
    }
    this.update = function (request, reply) {
        logger.info('Create module success');
        reply({ statusCode:200,success: true, message: "User data update!" });
    }
}

module.exports = handler;