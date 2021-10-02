'use strict'

const { booking } = require('../models')
const {Table} = require('../models')

class bookingController {
    static getAll = async (req, res, next) => {
        try{
            const {currentUser} = req
            let bookings = (currentUser.role === 'member') ? 
                await booking.findAll({where: { user_id: currentUser.id}})
            : await booking.findAll()
            
            res.status(200).json(bookings)
        }catch(error){
            next(error)
        }
    }

    static create = async(req, res, next) =>{
        try{
            let user = req.currentUser
            const { table_id } = req.body
            const data_table = await Table.findByPk(table_id)
            let status = null
            if(data_table.status === 'fill'){
                status = 'waiting'
            }else {
                status = 'on site'
                data_table.update({status: 'fill'})
            }

            const data_booking = await booking.create({
                user_id: user.id, table_id, status
            })
        
            res.status(201).json({
                message: 'Booking succesfully created',
                data_booking,
            })
        }catch (error) {
            next(error)
        }
    }

    static getDetail = async (req, res, next) => {
        try {
            let user = req.currentUser
            let {id} = req.params
            const data_booking = await booking.findByPk(id)
            if(user.role === 'member' && data_booking.user_id !== user.id) {
                return next({name: "Forbidden"})
            } 
            if(!data_booking) return next({name: "NotFound"})
            res.status(200).json(data_booking)

        } catch (error) {
            next(error)
        }
    }
    static update = async (req, res, next) => {
        try {
            let user = req.currentUser
            let {id} = req.params
            const {table_id, status} = req.body
            const data_booking = await booking.findByPk(id)
            if(!data_booking) return next({name: "NotFound"})
            if(user.role === 'member' && data_booking.user_id !== user.id) {
                return next({name: "Forbidden"})
            } 
            data_booking.update({
                user_id: user.id, table_id, status
            })
            res.status(200).json({
                message: 'Booking updated',
                data_booking
            })
        } catch (error) {
            next(error)
            
        }
    }

    static update_status = async(req,res,next) => {
        try {
            let user = req.currentUser
            let {id} = req.params
            const {status} = req.body
            const data_booking = await booking.findByPk(id)
            if(data_booking.user_id !== user.id) {
                return next({name: "Forbidden"})
            }
            if(status === "done"){
                const data_table = await Table.findByPk(data_booking.table_id)
                data_table.update({status: 'empty'})
            }
            
            data_booking.update({
                status
            })
            res.status(200).json({
                message: 'Booking status updated',
                data_booking
            })
            
        } catch (error) {
            next(error)
        }
    }

    static delete = async(req,res,next) => {
        try {
            let user = req.currentUser
            let {id} = req.params
            const data_booking = await booking.findByPk(id)
            if(user.role === 'member' && data_booking.user_id !== user.id) {
                return next({name: "Forbidden"})
            } 
            if(!data_booking) return next({name: "NotFound"})
            data_booking.destroy()

            res.status(200).json({
                message: "Deleted booking succesfully"
            })

        } catch (error) {
            next(error)
            
        }
    }
}

module.exports = bookingController