'use strict'

const router = require('express').Router()
const menuController = require('../controllers/menu')
const authentication = require('../middlewares/authentication')
const authorization = require('../middlewares/authorization')

router.get('/menus' , authentication  ,menuController.getAll)
router.post('/menus' , authentication ,authorization(['admin']) ,menuController.store)
router.get('/menus/:id' , authentication ,menuController.getDetail)
router.put('/menus/:id' , authentication  ,authorization(['admin']) ,menuController.update)
router.delete('/menus/:id' ,authentication , authorization(['admin']) ,menuController.delete)

module.exports = router