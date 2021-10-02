const {Joi}  = require('express-validation')

class bookingsValidation {
    static index = () => {
        return {
            body: Joi.object({
                table_id: Joi.number()
                            .required(),
            })
        }
    }

    static update = () => {
        return {
            body: Joi.object({
                table_id: Joi.number()
                            .required(),
                status: Joi.string()
                            .pattern(new RegExp('^(on site|waiting|cancel|done)$'))
            })
        }
    }

    static status = () => {
        return {
            body: Joi.object({
                status: Joi.string()
                            .pattern(new RegExp('^(on site|waiting|cancel|done)$'))
            })
        }
    }
}

module.exports = bookingsValidation