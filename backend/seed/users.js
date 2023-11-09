const db = require('../db')
const user = require('../models/user')
const User = require('../models/user')

db.on('error', console.error.bind(console, 'MondoDB connection error:'))

const main = async () => {
    const users = [
        {
            wantToHike: ["6549156970a7d00c27a9379b", "6549156970a7d00c27a9379c", "6549156970a7d00c27a9379d"],
            haveHiked: ["6549156970a7d00c27a937a4","6549156970a7d00c27a937a3"],
            reviews: []
        },
    ]
    await user.insertMany(users)
    console.log("Created a user!")
}

const run = async () => {
    await main()
    db.close()
}
run()