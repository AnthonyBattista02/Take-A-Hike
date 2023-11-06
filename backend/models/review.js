const { Schema } = require('mongoose')

const reviewSchema = new Schema(
  {
    trailName: { type: String, required: true },
    reviewText: { type: String, required: true },
    userName: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = reviewSchema