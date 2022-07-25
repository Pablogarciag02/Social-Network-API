const router = require("express").Router();

const {
    newThought,
    allThoughts,
    singleThought,
    deleteThought,
    updateThought

} = require("../../controllers/toughtController")

//api/thoughts
router //[
    .route("/")
    .get(allThoughts)
    .post(newThought)
//]

//api/thoughts/thoughtId
router //[
    .route("/:thoughtId")
    .get(singleThought)
    .delete(deleteThought)
    .put(updateThought)
//]


module.exports = router;