const router = require('express').Router()
const users = require('./users')
const menus = require('./menu')
const transactions = require('./transactions')
const tables = require('./table')

router.use(users)
router.use(menus)
router.use(transactions)
router.use(tables)

module.exports = router
