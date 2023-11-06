const mongoose = require('mongoose')

const {Schema} = require('mongoose')

const trailSchema = new Schema(
    {
        trailName: {type: String, required: true},
        miDistance: {type: Number, required: true},
        difficulty: {type: String, required: true},
        hikingTimeHrs: {type: Number, required: true},
        trailSurface: {type: String, required: true},
        feesPermits: {type: String, required: true},
        schedule: {type: String, required: true},
        image: {type: Image, required: false}
    },
    {timestamps: true},
)

module.exports = mongoose.model('Trail', trailSchema)