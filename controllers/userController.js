const { User, Thought } = require("../models");


const userController = { 
    //Create a user 
    createUser({ body }, res) {
        User.create(body)
        .then(dbUserData => res.json(dbUserData))
        .catch(err => res.status(400).json(err));
    },

    //GET all users
    allUsers(req, res) {
        User.find({})

        .populate({
            path: "thoughts",
            select: "-__v'"
        })

        .populate({
            path: "friends",
            select: "-__v'"
        })
        .select("-__v'")
        .sort({_id: -1})
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });

    },

    //Get a single user by his unique id:=:userID
    singleUser(req, res) {
        User.findOne({ _id: req.params.userId })
        .select("-__v") 
        .then((user) => 
        !user
            ? res.status(404).json({message: "no user found with this id!" })
            : res.json(user)
        )
        .catch((err) => {
            res.status(500).json(err)
        }); 
    },

    //Delete a single user by his unique id
    deleteUser(req, res) {
        User.findOneAndDelete({ _id: req.params.userId })

        .then((user) => 
         !user
           ? res.status(404).json({message: "no user found with this id"})
           : Thought.deleteMany({ _id: { $in: user.thoughts} }))
        .then(() => res.json({ message: "user and his thoughts deleted!"}))
        .catch((err) => res.status(500).json(err));
    },

    //Update the username or email or both of a user by his unique id
    updateUser(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $set: req.body },
            { runValidators: true, new: true }
        )
        .then((user) => 
         !user
            ? res.status(404).json({message: "no user found with this id!"})
            : res.json(user)
        )
        .catch((err) => res.status(500).json(err));
    },
    
}


module.exports = userController;