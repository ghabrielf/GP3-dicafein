"use strict"
const Transaction = require('../models').transaction

class transactionController {
    static getAll = async (req,res,next) => {
        try {
            const {currentUser} = req
            const transactions =(currentUser.role === 'member') ?
                await Transaction.findAll({where: {user_id: currentUser.id}})
            : await Transaction.findAll()
            res.status(200).json(transactions)
        } catch (error) {
            next(error)
        }
    }

    static create = async (req,res,next) => {
        try {
            const { user_id ,  status , payment_money } = req.body
            const transaction = await Transaction.create({
                user_id, status, payment_money
            })
            res.status(201).json({
                message: 'Transaction succesfully created',
                transaction,
            })
        } catch (error) {
            next(error)
        }
    }

    static getDetail = async (req,res,next) => {
        try {
            let user = req.currentUser
            let {id} = req.params
            const transaction = await Transaction.findByPk(id)
            if(!transaction) return next({name: "NotFound"})
            if(user.role === 'member' && transaction.user_id !== user.id) {
                return next({name: "Forbidden"})
            } 
            
            res.status(200).json(transaction)
        } catch (error) {
            next(error)
        }
    }

    static update = async (req,res,next) => {
        try {
            let user = req.currentUser
            let {id} = req.params
            const { status , payment_money } = req.body

            let transaction = await Transaction.findByPk(id)
            if(!transaction) return next({name: "NotFound"})
            if(user.role === 'member' && transaction.user_id !== user.id) {
                return next({name: "Forbidden"})
            } 
            transaction.update({
                status, payment_money
            })
            res.status(200).json(transaction)
        } catch (error) {
            next(error)
        }
    }

    static delete = async (req,res,next) => {
        try {
            let user = req.currentUser
            let {id} = req.params
            let transaction = await Transaction.findByPk(id)
            
            if(user.role === 'member' && transaction.user_id !== user.id) {
                return next({name: "Forbidden"})
            } 
            transaction.destroy()

            res.status(200).json({
                message: "Deleted transaction succesfully"
            })
        } catch (error) {
            next(error)
        }
    }

    static updateStatus = async (req,res,next) => {
        try {
            let {id} = req.params
            let { status } = req.body
            let transaction = await Transaction.findByPk(id)
            if(!transaction) return next({name: "NotFound"})
            transaction.update({status})
            res.status(200).json({
                message: "Update status successfully",
                transaction
            })
        } catch (error) {
            next(error)
        }
    }
}

module.exports = transactionController