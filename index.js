const express = require('express')
const bodyParser = require('body-parser')

//local imports
const connectDb = require('./db.js')
const employeeRoutes = require('./controllers/employee.controller')
const { errorHandler } = require('./middlewares')

const app = express()
//middleware
app.use(bodyParser.json())
app.get('/', (req, res) => {
    res.send("hello world")
})
app.use('/api/list', employeeRoutes)
app.use(errorHandler)


connectDb()
    .then(() => {
        console.log('db connection succeeded.')
        app.listen(process.env.PORT || 8000,
            () => console.log('server started at 8000.'))
    })
    .catch(err => console.log(err))