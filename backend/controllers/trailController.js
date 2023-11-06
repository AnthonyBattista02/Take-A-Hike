const Trail = require('../models/trail')

module.exports = {
    getAllTrails, getOneTrail, createTrail, updateTrail, deleteTrail,
}

//TRAIL
async function getAllTrails(req, res) {
    try{
        const trails = await Trail.find()
        res.json(trails)
    } catch (error){
        return res.status(500).send(error.message)
    }
}

async function getOneTrail(req, res) {
    try{
        const id = req.params.id
        const trail = await Trail.findById(id)
        if (trail) {
            return res.json(trail)
        }
        return res.status(404).send('Trail with the specified ID does not exist.')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function createTrail(req, res) {
    console.log("create trail")
    try{
        const trail = await new Trail(req.body)
        await trail.save()
        return res.status(201).json({
            trail
        })
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function updateTrail(req, res) {
    try{
        const id = req.params.id
        const trail = await Trail.findByIdAndUpdate(id, req.body, {new: true})
        if (trail) {
            return res.status(200).json(trail)
        }
        throw new Error("Trail not found.")
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function deleteTrail(req, res) {
    try{
        const id = req.params.id
        let trail = await Trail.findByIdAndDelete(id)
        if (trail) {
            return res.status(200).send("Trail deleted.")
        }
        throw new Error("Trail not found.")
    } catch (error) {
        return res.status(500).send(error.message)
    }
}