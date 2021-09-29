"use strict"

const { Table } = require('../models')

class tableController {
    static getAll = async (req, res, next) => {
        try{
            const tables = await Table.findAll()
            res.status(200).json(tables)

        }catch (error) {
            next(error)
        }

    }
    static create = async (req, res, next) => {
        try{
            const {table_number, status} = req.body
            const tables = await Table.create({table_number, status})
            res.status(201).json(tables)
        }catch (error) {
            next (error)
        }
    }
    static getDetail = async (req, res, next) => {
        try{
            const {id} = req.params
            const tables = await Table.findByPk(id)
            res.status(200).json(tables)

        }catch (error) {
            next (error)
        }
    }
    static update = async (req, res, next) => {
        try{
            const {table_number, status} = req.body
            const{id} = req.params
            const tables = await Table.findByPk(id)
            tables.update({table_number, status})
            res.status(200).json({
                message: 'Update Success'
            })
        } catch (error) {
            next(error)
        }
    }
    static delete = async (req, res, next) => {
        try{
            let {id} = req.params
            const tables = await Table.findByPk(id)
            tables.destroy()
            res.status(200).json({
                message: 'Delete Success'
            })

        }catch (error) {
            next(error)
        }
    }

}

module.exports = tableController