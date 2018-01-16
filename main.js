"use strict";

const Hapi = require('hapi');
const Inert = require('inert');
const Vision = require('vision');
const server = new Hapi.Server();
const HapiSwagger = require('hapi-swagger');
const swaggerOptions = require('./config/swagger');
var config = require('./config/config');
var routes = require('./src/routes');
var Logger = require('./logger');
const logger = new Logger();

// if host needed. heroku platform dont need host
// var host = config.production['host'];
// var port = config.production['port'];
// Create a server with a host and port
server.connection({
    // if host needed (note: heroku server dont need host name specification)
    // host : host,
    port: process.env.PORT || 8080,
    // for cross-origin
    routes: {
        cors: true
    }
});

server.register([
    Inert,
    Vision,
    {
        'register': HapiSwagger,
        'options': swaggerOptions
    }], (err) => {
        if (err) {
            logger.error('Failed to load plugin:' + err);
        }
    });

server.route(routes);

// Start the server
server.start((err) => {
    if (err) {
        throw err;
    }
    logger.info('Server running at:' + server.info.uri);
});

module.exports = server;
