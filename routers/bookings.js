const router = require('express').Router()
const bookingController = require('../controllers/booking')
const authentication = require('../middlewares/authentication')
const authorization = require('../middlewares/authorization')
const {validate} = require("express-validation")
const validation = require('../validation/bookingsValidation')


router.get('/bookings' , authentication , bookingController.getAll)
router.post('/bookings' , authentication , validate(validation.index()) , bookingController.create)
router.get('/bookings/:id' , authentication , bookingController.getDetail)
router.put('/bookings/:id' , authentication , validate(validation.update()) , bookingController.update)
router.patch('/bookings/:id/status', authentication , validate(validation.status()), bookingController.update_status)
router.delete('/bookings/:id', authentication, bookingController.delete)

module.exports = router