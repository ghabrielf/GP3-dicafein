"use strict"

const { Menu } = require('../models')

class menuController {
    static getAll = async (req, res, next) => {
        try{
            let menus = await Menu.findAll()
            res.status(200).json(menus)

        }catch (error){
            next(error)
        }
    }
    static store = async (req, res, next) => {
        try {
            let {name,  category ,description, cost, image} = req.body
            let menu = await Menu.create({name,  category ,description, cost, image})
            res.status(201).json({
                message: 'Create Menu Success!',
                menu
            })
        } catch (error) {
            next(error)
        }
    }
    static getDetail = async (req, res, next) => {
        try {
            let {id} = req.params
            let menu = await Menu.findByPk(id)
            res.status(200).json(menu)
        } catch (error) {
            next(error)
            
        }
    }
    static update = async (req, res, next) => {
        try {
            let {id} = req.params
            let {name,  category ,description, cost, image} = req.body
            let menu = await Menu.findByPk(id)
            menu.update({name,  category ,description, cost, image})
            res.status(200).json({
                message: 'Update Menu Success!',
                menu
            })
        } catch (error) {
            next(error)
        }
    }
    static delete = async (req, res, next) => {
        try {
            let {id} = req.params
            let menu = await Menu.findByPk(id)
            menu.destroy()
            res.status(200).json({
                message: 'Data Deleted!'
            })
        } catch (error) {
            next(error)
        }
    }
}

module.exports = menuController