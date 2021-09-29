const authorization = (roles) => (req,res,next) => {
    const userRole = req.currentUser.role
    if(!roles.includes(userRole)) {
        throw new Error('unauthorize access')
    }
    next()
}

module.exports = authorization