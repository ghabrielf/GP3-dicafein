const {Joi} = require('express-validation')

class menuValidation {
    static index = () => {
        return {
            body: Joi.object({
                name: Joi.string()
                        .min(3)
                        .max(20)
                        .required(),
                category: Joi.string()
                        .pattern(new RegExp('^(food|drink)$')),
                description: Joi.string()
                        .min(5)
                        .max(255)
                        .required(),
                image: Joi.string()
                        .min(3)
                        .max(50)
                        .required(),
                cost: Joi.number()
                        .required(),
            })
        }
    }
}

module.exports = menuValidation