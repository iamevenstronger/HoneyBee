'use strict';
const Joi = require('joi');
function response() {
    return {
        create: {
            statusCode: Joi.number(),
            message: Joi.string()
        },
        update: {
            statusCode: Joi.number(),
            message: Joi.string()
        }
    };
}

module.exports = response();