const mongoose = require ('mongoose')
const { Schema } = require('mongoose')

const userSchema = new Schema (
    {
        //ref: is to Trail (or Review) model
        wantToHike: [{type: Schema.Types.ObjectId, ref: 'Trail'}],
        haveHiked: [{type: Schema.Types.ObjectId, ref: 'Trail'}],
        reviews: [{type: Schema.Types.ObjectId, ref: 'Review'}]
    },
    {timestamps: true},
)

module.exports = mongoose.model('User', userSchema)