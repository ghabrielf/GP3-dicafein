'use strict'
const {User} = require('../models')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')


class authController{

    static register = async (req, res, next) => {
        try{
            const {name , email, password} = req.body

            const user = await User.create({
                name,
                email,
                password: bcrypt.hashSync(password, 8),
                role: 'member'
            })

            res.status(201).json({
                message: 'Register Success',
                user
            })
        } catch(error){
            console.log(error)
            next(error)
        }
    }

    static login = async (req, res, next) => {
        try {
            const {email, password} = req.body

            // check user
            const user = await User.findOne({ where: {email}})
            if(!user){
                throw new Error ('Invalid Email/Password')
            }

            // verify password
            let check = bcrypt.compare(password, user.password)
            if (!check) {
                throw new Error ('Invalid Email/Password')
            }

            // create token
            const jwtPayload = {
                userId: user.id
            }
            const accessToken = jwt.sign(jwtPayload, 'dicafein')
            
            res.status(200).json({
                message: "Success, you've been logged in",
                accessToken: accessToken
                
            })
            
        } catch(error) {
            next(error)
        }
    }

    //static get all
    
    static getAll = async (req, res, next) => {
        try{
            let users = await User.findAll()
            res.status(200).json(users)
        }catch(error){
            next(error)
        }
    }
    


    static getDetail = async(req,res,next) => {
        try {
            // User.findByPk(id)
            const user = await User.findByPk(req.params.id)
            res.status(200).json({
                message: 'detail',
                user
            })
        } catch (error) {
            next(error)
        }
    }
}

module.exports = authController