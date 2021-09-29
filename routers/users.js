'use strict'

const router = require ('express').Router();
const authController = require ('../controllers/auth')
const authentication = require('../middlewares/authentication')
const authorization = require('../middlewares/authorization')

router.post('/users/register' , authController.register)
router.post('/users/login' , authController.login)
router.get('/users', authentication , authorization(['admin']), authController.getAll )
router.get('/users/:id', authentication , authorization(['admin']), authController.getDetail)

module.exports = router