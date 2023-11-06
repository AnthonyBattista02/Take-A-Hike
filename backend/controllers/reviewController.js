const Review = require('../models/review')

async function getAllReviews(req, res) {
    try{
        const reviews = await Review.find()
        res.json(reviews)
    } catch (error){
        return res.status(500).send(error.message)
    }
}

async function getOneReview(req, res) {
    try{
        const id = req.params.id
        const review = await Review.findById(id)
        if (review) {
            return res.json(review)
        }
        return res.status(404).send('Review with the specified ID does not exist.')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function createReview(req, res) {
    console.log("create review")
    try{
        const review = await new Review(req.body)
        await review.save()
        return res.status(201).json({
            review
        })
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function updateReview(req, res) {
    try{
        const id = req.params.id
        const review = await Material.findByIdAndUpdate(id, req.body, {new: true})
        if (review) {
            return res.status(200).json(review)
        }
        throw new Error("Review not found.")
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function deleteReview(req, res) {
    try{
        const id = req.params.id
        let review = await Review.findByIdAndDelete(id)
        if (review) {
            return res.status(200).send("Review deleted.")
        }
        throw new Error("Review not found.")
    } catch (error) {
        return res.status(500).send(error.message)
    }
}


module.exports = {
    getAllReviews, getOneReview, createReview, updateReview, deleteReview,
}
