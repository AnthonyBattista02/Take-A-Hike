const mongoose = require ('mongoose')
const { Schema } = require('mongoose')

const userSchema = new Schema (
    {
        //ref: IS TO Trail (OR Review) MODEL
        wantToHike: [{type: Schema.Types.ObjectId, ref: 'Trail'}],
        haveHiked: [{type: Schema.Types.ObjectId, ref: 'Trail'}],
        reviews: [{type: Schema.Types.ObjectId, ref: 'Review'}]
    },
    {timestamps: true},
)

module.exports = mongoose.model('User', userSchema)