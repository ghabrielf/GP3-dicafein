const handleError = (error , req, res,next) => {
    let statusCode = 500
    let errMessage = "Internal server error"
    console.log(error)
    
    switch (error.name) {
        case "Error":
            errMessage = error.message
            break
        case "SequelizeUniqueConstraintError":
            errMessage = error.message
            break
        default:
            errMessage = "Internal Server Error"
    }
    
    res.status(statusCode).json({
        message: errMessage
    })
}

module.exports = handleError