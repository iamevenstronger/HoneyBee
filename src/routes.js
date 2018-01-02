'use strict';

// specify router modules here
const demo = require('./demo/router');
const Logger = require('./../logger');
const logger = new Logger();

function routes() {
    var routeArray = [
        // bind modules here
        demo 
    ];
    var allRoutes = [];

    for(var route in routeArray) {
        allRoutes = allRoutes.concat(routeArray[route]);
    }
    
    logger.info('All Routes set!');

    return allRoutes;
}

module.exports = routes();