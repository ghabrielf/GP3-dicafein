"use strict"

const router = require('express').Router()
const tableController = require('../controllers/table')
const authentication = require('../middlewares/authentication')
const authorization = require('../middlewares/authorization')
const {validate} = require('express-validation')
const validation = require("../validation/tableValidation")

router.get('/tables' , authentication  ,tableController.getAll)
router.post('/tables' , authentication ,authorization(['admin']) , validate(validation.index()) ,tableController.create)
router.get('/tables/:id' , authentication ,tableController.getDetail)
router.put('/tables/:id' , authentication  ,authorization(['admin']) , validate(validation.index()) ,tableController.update)
router.delete('/tables/:id' ,authentication , authorization(['admin']) ,tableController.delete)
router.patch('/tables/:id/status' ,authentication , authorization(['admin']) , validate(validation.status()) ,tableController.update_status)

module.exports = router