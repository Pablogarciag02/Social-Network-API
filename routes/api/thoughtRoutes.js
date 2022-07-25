const router = require("express").Router();

const {
    newThought,
    allThoughts,
    singleThought,
    deleteThought,
    updateThought,
    newReaction,
    deleteReaction

} = require("../../controllers/toughtController")

//api/thoughts
router //[
    .route("/")
    .get(allThoughts)
    .post(newThought);
//]

//api/thoughts/thoughtId
router //[
    .route("/:thoughtId")
    .get(singleThought)
    .delete(deleteThought)
    .put(updateThought);
//]

// api/thoughts/:thoughtId/reactions
router //[
    .route("/:thoughtId/reactions")
    .post(newReaction)
//]

// api/thoughts/:thoughtId/reactions/:reaction:id
router //[
    .route("/:thoughtId/reactions/:reactionId")
    .delete(deleteReaction);
//]


module.exports = router;