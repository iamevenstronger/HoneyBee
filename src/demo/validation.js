var Joi = require('joi');

function validation() {
    return {
        create: {
            payload: {
                username: Joi.string().required(),
                email: Joi.string().email().required(),
                age: Joi.number().min(18)
            }
        },
        update: {
            params: {
                email: Joi.string().email().required()
            }
        }
    };
}

module.exports = validation();