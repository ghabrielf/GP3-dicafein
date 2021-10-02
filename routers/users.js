'use strict'

const router = require ('express').Router();
const authController = require ('../controllers/auth')
const authentication = require('../middlewares/authentication')
const authorization = require('../middlewares/authorization')
const userMiddleware = require('../middlewares/userMiddleware')
const {validate} = require('express-validation')
const validation = require('../validation/usersValidation')

router.post('/users/register' , validate(validation.register() , {} , {}) , authController.register)
router.post('/users/login' , validate(validation.login() , {} , {}) , authController.login)
router.get('/users', authentication , authorization(['admin']), authController.getAll )
router.get('/users/:id', authentication , userMiddleware , authController.getDetail)

module.exports = router