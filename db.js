'use strict';

const Sequelize = require('sequelize');
const config = require('./config/config');
const db_name = config.development['database'];
const username = config.development['username'];
const password = config.development['password'];
const host = config.development['host'];
const dialect = config.development['dialect'];
function db() {
//     return new Sequelize(db_name, username, password, {
//         host: host,
//         dialect: dialect,
//         pool: {
//             idle: 30000,
//             min: 20,
//             max: 30
//         }
//     });
    return  new Sequelize('postgres://yfqwoahxtvlmrt:fe6c25bd5a6fb249ac8f8ce8caac2552e4051a1dc86d134fb7f5e90e920e7905@ec2-54-228-181-43.eu-west-1.compute.amazonaws.com:5432/dscmoo6nt65lp');
}

module.exports = db();
