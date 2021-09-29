const jwt = require('jsonwebtoken')
const { User } = require('../models')

const authentication = async (req,res,next) => {
    try {
        const {token} = req.headers
        if(!token) {
            throw new Error('access token required!')
        }
        
        // verify token
        const jwtPayload = jwt.verify(token , 'dicafein')
        
        // check user
        const dataUser = await User.findByPk(jwtPayload.userId)
        if(!dataUser) {
            throw new Error('invalid access token!')
        }
        req.currentUser = dataUser
        next()
    } catch (error) {
        next(error)
    }
}

module.exports = authentication