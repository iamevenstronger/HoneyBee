'use strict';

var winston = require('winston');

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
