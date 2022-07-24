const router = require("express").Router();

const {
    newThought,
    // allThoughts,
    //singleThought

} = require("../../controllers/toughtController")

//api/thoughts
router //[
    .route("/:id")
    // .get(allThoughts)
    .post(newThought)
//]



module.exports = router;