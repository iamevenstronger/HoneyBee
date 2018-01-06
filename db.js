'use strict';

const Sequelize = require('sequelize');
const config = require('./config/config');
const db_name = config.development['database'];
const username = config.development['username'];
const password = config.development['password'];
const host = config.development['host'];
const dialect = config.development['dialect'];
function db() {
    return new Sequelize(db_name, username, password, {
        host: host,
        dialect: dialect,
        pool: {
            idle: 30000,
            min: 20,
            max: 30
        }
    });
}

module.exports = db();