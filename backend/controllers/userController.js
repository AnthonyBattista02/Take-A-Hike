const User = require('../models/user');

//USER
const getAllUsers = async (req, res) => {
    try {
        const users = await User.find()
        res.json(users)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getUserById = async (req, res) => {
    try {
        const { id } = req.params;
        //POPULATE KNOWS TO LOOK FOR THE DATA IN THE MODEL (Trail) REF OF THE KEY  (wantToHike, haveHiked) IN THE USER MODEL
        const user = await User.findById(id).populate("wantToHike").populate("haveHiked").exec()
        console.log(user)
        if (user) {
            return res.json(user);
        }
        return res.status(404).send('User with the specified ID does not exist');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const createUser = async (req, res) => {
    try {
        const user = await new User(req.body)
        await user.save()
        return res.status(201).json({
            user,
        });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

const updateUser = async (req, res) => {
    try {
        let { id } = req.params;
        let user = await User.findByIdAndUpdate(id, req.body, { new: true })
        if (user) {
            return res.status(200).json(user)
        }
        throw new Error("User not found")
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await User.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("User deleted");
        }
        throw new Error("User not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
}