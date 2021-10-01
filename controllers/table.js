"use strict"

const { Table } = require('../models')

class tableController {
    static getAll = async (req, res, next) => {
        try{
            const tables = await Table.findAll({ attributes: ['id' , 'chalk_board' , 'status'] })
            res.status(200).json(tables)

        }catch (error) {
            next(error)
        }

    }
    static create = async (req, res, next) => {
        try{
            const {chalk_board, status} = req.body
            const tables = await Table.create({chalk_board, status})
            res.status(201).json(tables)
        }catch (error) {
            next (error)
        }
    }
    static getDetail = async (req, res, next) => {
        try{
            const {id} = req.params
            const tables = await Table.findByPk(id)
            if(!tables) return next({name: "NotFound"})
            res.status(200).json(tables)

        }catch (error) {
            next (error)
        }
    }
    static update = async (req, res, next) => {
        try{
            const {chalk_board, status} = req.body
            const{id} = req.params
            const cafe_table = await Table.findByPk(id)
            if(!cafe_table) return next({name: "NotFound"})
            cafe_table.update({chalk_board, status})
            res.status(200).json({
                message: 'Update Success',
                cafe_table
            })
        } catch (error) {
            next(error)
        }
    }
    static delete = async (req, res, next) => {
        try{
            let {id} = req.params
            const tables = await Table.findByPk(id)
            if(!tables) return next({name: "NotFound"})
            tables.destroy()
            res.status(200).json({
                message: 'Delete Success'
            })

        }catch (error) {
            next(error)
        }
    }
    static update_status = async (req, res, next) => {
        try{
            const {status} = req.body
            const {id} = req.params
            const tables = await Table.findByPk(id)
            tables.update({status})
            res.status(200).json({
                message: 'Success update'
            })
        }catch (error) {
            next(error)
        }
    }

}

module.exports = tableController