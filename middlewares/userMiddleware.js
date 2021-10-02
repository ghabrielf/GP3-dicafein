const userMiddleware = async (req,res,next) => {
    let {currentUser} = req
    let {id} = req.params
    if(currentUser.role === 'member' && currentUser.id !== +id) {
        return next({name: "Forbidden"})
    }
    next()
}

module.exports = userMiddleware