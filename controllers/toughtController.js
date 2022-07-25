const { Thought, User } = require("../models");

const thoughtController = {
    //Create new thought and add it to the userId that is in the request.body
    newThought({ body }, res) {
        Thought.create(body)
        .then(({_id}) => {
            return User.findOneAndUpdate(
                { _id: body.userId },
                { $push: { thoughts: _id } },
                { new: true }
            );
        })
        .then((thought) => res.json({message: "Succesfully created thought and added it to user" }))
        .catch((err) => res.json(err));

    },

    //Get all the thoughts that have been created
    allThoughts(req, res) {
        Thought.find({})

        .select("-__v")
        .sort({_id: -1})
        .then(dbThoughtData => res.json(dbThoughtData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err)
        })
    },

    //Get a single thought based on its _id = thoughtId
    singleThought(req, res) {
        Thought.findOne({ _id: req.params.thoughtId })
        .select("-__v")
        .then((thought) => 
        !thought
            ? res.status(404).json({message: "no thought found with this id!"})
            : res.json(thought)
        )
        .catch((err) => {
            res.status(500).json(err)
        });
    },

    //Delete a single thought based on its _id = thoughtId
    deleteThought(req, res) {
        Thought.findOneAndDelete({ _id: req.params.thoughtId })

        .then((thought) => 
         !thought
            ? res.status(404).json({message: "no thought found with this id!"})
            : res.json({message: "Thought Deleted"})
        )
      
        .catch((err) => res.status(500).json(err));
    },

    //Update a thought 
    updateThought(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $set: req.body },
            { runValidators: true, new: true }
        )
        .then((thought) => 
         !thought
            ? res.status(404).json({message: "no thought found with this id"})
            : res.json({message: "Thought Updated!"}) && (thought)
        )
        .catch((err) => res.status(500).json(err));
    }


};

module.exports = thoughtController;