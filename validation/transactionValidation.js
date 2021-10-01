const {Joi} = require('express-validation')

class transactionValidation {
    static index = () => {
        return {
            body: Joi.object({
                status: Joi.string()
                        .pattern(new RegExp('^(done|not yet)$')),
                user_id: Joi.number()
                        .required(),
                payment_money: Joi.number()
                            .min(0)
                            .required()
            })
        }
    }

    static status = () => {
        return {
            body: Joi.object({
                status: Joi.string()
                        .pattern(new RegExp('^(done|not yet)$'))
            })
        }
    }

    static menu = () => {
        return {
            body: Joi.object({
                menu_id: Joi.number()
                            .min(1)
                            .required()
            })
        }
    }
}

module.exports = transactionValidation