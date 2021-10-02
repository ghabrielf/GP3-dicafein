const {Joi} = require('express-validation')

class usersValidation {
    static login = () => {
        const validation = {
            body: Joi.object({
                email: Joi.string()
                    .email()
                    .required(),
                password: Joi.string()
                .regex(/[a-zA-Z0-9]{6,20}/)
                    .required(),
            }),
        }
        return validation
    }

    static register = () => {
        return {
            body: Joi.object({
                name: Joi.string()
                    .min(5)
                    .max(40),
                email: Joi.string()
                    .email()
                    .required(),
                password: Joi.string()
                .regex(/[a-zA-Z0-9]{6,20}/)
                    .required(),
            })
        }
    }
}

module.exports = usersValidation