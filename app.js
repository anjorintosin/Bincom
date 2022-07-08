const express = require('express')
const app = express()
const pollingRoute = require('./routers/bincom')
require('./db/mongoose')

app.use(express.json())
app.use(pollingRoute)

module.exports = {
    app
}