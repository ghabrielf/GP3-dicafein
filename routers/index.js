const router = require('express').Router()
const users = require('./users')
const menus = require('./menu')
const transactions = require('./transactions')
const tables = require('./table')
const bookings = require('./bookings')
const transaction_menu = require('./transaction_menu')

router.use(users)
router.use(menus)
router.use(transactions)
router.use(tables)
router.use(bookings)
router.use(transaction_menu)

module.exports = router

