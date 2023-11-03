const express = require('express')
const PORT = process.env.PORT||3001
const cors = require('cors')
const logger = require('morgan')
const bodyParser = require('body-parser')
 
const app = express()
 
app.use(cors())
app.use(logger('dev'))
app.use(bodyParser.json( ))
app.use(express( ))
app.use(express.urlencoded({extended: false}))
 
app.listen(PORT,() => {
            console.log(`Express server listening on port ${PORT}`)
})