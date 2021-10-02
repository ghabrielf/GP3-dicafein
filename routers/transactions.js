'use strict'

const router = require('express').Router()
const transactionController = require('../controllers/transaction')
const authentication = require('../middlewares/authentication')
const authorization = require('../middlewares/authorization')

router.get('/transactions' , authentication , authorization(['admin']) , transactionController.getAll)
router.post('/transactions' , authentication , authorization(['admin']) , transactionController.create)
router.get('/transactions/:id' , authentication , authorization(['admin']) , transactionController.getDetail)
router.put('/transactions/:id' , authentication , authorization(['admin']) , transactionController.update)
router.delete('/transactions/:id' , authentication , authorization(['admin']) , transactionController.delete)

module.exports = router