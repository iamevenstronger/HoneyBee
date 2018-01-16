'use strict';
const Joi = require('joi');
function response() {
    return {
        create: {
            statusCode: Joi.number(),
            success: Joi.boolean(),
            message: Joi.string()
        },
        update: {
            statusCode: Joi.number(),
            success: Joi.boolean(),
            message: Joi.string()
        }
    };
}

module.exports = response();