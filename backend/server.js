const express = require('express')
const db = require('./db')
const PORT = process.env.PORT||3001
const cors = require('cors')
const logger = require('morgan')
const bodyParser = require('body-parser')

const app = express()

const trailController = require('./controllers/trailController')
const reviewController = require('./controllers/reviewController')
const userController = require('./controllers/userController')

app.use(cors())
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(express( ))
app.use(express.urlencoded({extended: false}))

app.get('/', (req, res) => {
    res.send('This is root')
  })

//TRAILS
app.get('/trails', trailController.getAllTrails)
app.get('/trails/:id', trailController.getOneTrail)
app.post('/trails', trailController.createTrail)
app.put('/trails/:id', trailController.updateTrail)
app.delete('/trails/:id', trailController.deleteTrail)

//REVIEWS
app.get('/reviews', reviewController.getAllReviews)
app.get('/reviews/:id', reviewController.getOneReview)
app.post('/reviews', reviewController.createReview)
app.put('/reviews/:id', reviewController.updateReview)
app.delete('/reviews/:id', reviewController.deleteReview)

//USERS
app.get('/users', userController.getAllUsers)
app.get('/users/:id', userController.getUserById)
app.post('/users', userController.createUser)
app.put('/users/:id', userController.updateUser)
app.delete('/users/:id', userController.deleteUser)

app.listen(PORT,() => {
    console.log(`Express server listening on port ${PORT}`)
})

