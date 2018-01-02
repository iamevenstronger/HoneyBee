"use strict";

module.exports = function () {

    var env = process.env.NODE_ENV || 'development';
    var port = process.env.PORT || 8080 ;
    var dbContants = databaseConfig();
    var appConstants = applicationConfig();

    var obj = {
        application: {
            url: appConstants[env]['url'],
            host: appConstants[env]['host'],
            port: appConstants[env]['port'],
        },
        database: {
            host: dbContants[env]['host'],
            user: dbContants[env]['user'],
            password: dbContants[env]['password'],
            database: dbContants[env]['database']
        },
        server: {
            defaultHost: 'http://localhost:3000'
        }
    };

    if (!obj.application['host']) {
        throw new Error('Missing constant application.host. ' +
            'Check your enviroment variables NODE_HOST.');
    } else if (!obj.application['port']) {
        throw new Error('Missing constant application.port. ' +
            'Check your enviroment variable NODE_PORT.');
    } else if (!obj.database['host']) {
        throw new Error('Missing constant database.host. ' +
            'Check your enviroment variables.');
    } else if (!obj.database['user']) {
        throw new Error('Missing constant database.user. ' +
            'Check your enviroment variables.');
    } else if (!obj.database['database']) {
        throw new Error('Missing constant database.database. ' +
            'Check your enviroment variables.');
    }

    return obj;

    function databaseConfig() {
        return {
            'production': {
                'host': process.env.DB_PRD_HOST,
                'user': process.env.DB_PRD_USER,
                'password': process.env.DB_PRD_PASS,
                'database': process.env.DB_DEV_NAME
            },
            'development': {
                'host': 'localhost',
                'user': 'root',
                'password': '',
                'database': 'HoneyComb'
            },
            'test': {
                'host': 'localhost',
                'user': 'root',
                'password': '',
                'database': 'HoneyComb'
            }
        };
    }

    function applicationConfig() {
        return {
            'production': {
                'url': 'https://' + process.env.NODE_HOST + ':' +
                process.env.NODE_PORT,
                'host': process.env.NODE_HOST,
                'port': process.env.NODE_PORT
            },
            'development': {
                'url': 'http://' + "process.env.NODE_HOST" + ':' +
                port,
                'host': 'process.env.NODE_HOST',
                'port': port
            },
            'test': {
                'url': 'http://' + process.env.NODE_HOST + ':' +
                port,
                'host': 'process.env.NODE_HOST',
                'port': port
            }
        };
    }
}();