const express = require('express')
const app = express()
const axios = require('axios')
const rowdy = require ('rowdy-logger')
const routesReport = rowdy.begin(app)
app.use(express.json())
app.use(require('cors')())

const models = require('./models')

const morgan = require('morgan')
app.use(morgan('tiny'))

//////////////////////////////write code below///////////////////////////////

//userRoutes
const userRoutes = require('./routes/userRoutes')
app.use('/users', userRoutes) //need to use just one app.use per route!

//businessRoutes
const businessRoutes = require('./routes/businessRoutes')
app.use('/business', businessRoutes)






//////////////////////////////write code above///////////////////////////////


const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`port running on ${PORT}`)
  routesReport.print()
})