"use strict"

const router = require('express').Router()
const tableController = require('../controllers/table')
const authentication = require('../middlewares/authentication')
const authorization = require('../middlewares/authorization')

router.get('/tables' , authentication  ,tableController.getAll)
router.post('/tables' , authentication ,authorization(['admin']) ,tableController.create)
router.get('/tables/:id' , authentication ,tableController.getDetail)
router.put('/tables/:id' , authentication  ,authorization(['admin']) ,tableController.update)
router.delete('/tables/:id' ,authentication , authorization(['admin']) ,tableController.delete)

module.exports = router