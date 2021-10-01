const {Joi} = require('express-validation')

class tableValidation {
    static index = () => {
        return {
            body: Joi.object({
                chalk_board: Joi.number()
                                .min(0)
                                .required(),
                status: Joi.string()
                        .pattern(new RegExp('^(fill|empty)$'))
            })
        }
    }

    static status = () => {
        return {
            body: Joi.object({
                status: Joi.string()
                        .pattern(new RegExp('^(fill|empty)$'))
            })
        }
    }
}

module.exports = tableValidation