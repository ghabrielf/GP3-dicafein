require('dotenv').config()

const express = require('express')
const handleError = require('./middlewares/handleError')
const app = express()
const port = process.env.APP_PORT
const routers = require('./routers')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(routers)

app.use(handleError)
app.listen(port , () => {
    `server running at port ${port}`
})