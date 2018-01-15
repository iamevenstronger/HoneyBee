'use strict';

const validate = require('./validation');
const response = require('./response');
const handler = require('./handler');
const handle = new handler();
function demoRouter() {
    return [{
        method: 'POST',
        path: '/demo',
        config: {
            handler: handle.create,
            description: 'Post user data',
            notes: 'demo post request',
            tags: ['api','user'],
            validate: validate.create,
            response: {
                schema : response.create
            }
        }
    }, {
        method: 'PUT',
        path: '/demo',
        config: {
            handler: handle.update,
            description: 'Update user data',
            notes: 'demo update request',
            tags: ['api','user'],
            validate: validate.update,
            response: {
                schema : response.update
            }
        }       
    }];
}

module.exports = demoRouter();