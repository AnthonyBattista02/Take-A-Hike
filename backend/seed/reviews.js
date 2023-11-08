const db = require('../db')
const Review = require('../models/review')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async() => {
    const reviews = [
        {
            trailName: "Dove Springs",
            reviewText: "Amazing trail! My family loved it!",
            userName: "John Stamos"
        },
        {
            trailName: "Dove Springs",
            reviewText: "Sweet trail! My mamma really loved it!",
            userName: "Johnny Bravo"
        },
    ]
    await Review.insertMany(reviews)
    console.log('Created some reviews!')
}

const run = async () => {
    await main()
    db.close()
}

run()