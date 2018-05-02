'use strict';

var winston = require('winston');
const files = new winston.transports.File({ filename: 'logs/app.log' });
const console = new winston.transports.Console();

winston.add(console);
winston.add(files);

function Logger() {

    this.info = function(text) {
        winston.log('info',text);
    }

    this.warn = function(text) {
        winston.log('warn',text);
    }

    this.error = function(text) {
        winston.log('error',text);
    }
}

module.exports = Logger ;
