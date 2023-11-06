const express = require('express')
const db = require('./db')
const PORT = process.env.PORT||3001
const cors = require('cors')
const logger = require('morgan')
const bodyParser = require('body-parser')

const app = express()

app.use(cors())
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(express( ))
app.use(express.urlencoded({extended: false}))

app.listen(PORT,() => {
    console.log(`Express server listening on port ${PORT}`)
})

//TRAILS
app.get('/trails', trailController.getAllTrails)
app.get('/trails/:id', trailController.getOneTrail)
app.post('/trails', trailController.createTrail)
app.put('/trails/:id', trailController.updateTrail)
app.delete('/trails/:id', trailsController.deleteTrail)

// USER
app.get('/users', userController.getUsers)
app.get('/users/:id', userController.getUser)
app.post('/users', userController.createUser)
app.put('/users/:id', userController.updateUser)
app.delete('/users/:id', userController.deleteUser)