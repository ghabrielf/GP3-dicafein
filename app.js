const express = require('express')
const handleError = require('./middlewares/handleError')
const app = express()
const port = 3000
const routers = require('./routers')

app.use(express.urlencoded({ extended: true }))

app.use(routers)

app.use(handleError)
app.listen(port , () => {
    `server running at port ${port}`
})