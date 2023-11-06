const { Schema } = require('mongoose')

const userSchema = new Schema (
    {
        userName: { type: String, required: true },
        image: { type: String, required: true}, // Image
        
    },
    {timestamps: true},
)

module.exports = userSchema