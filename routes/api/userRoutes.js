const router = require("express").Router()

const {
    createUser,
    allUsers,
    singleUser,
    deleteUser,
    updateUser,
    

} = require("../../controllers/userController")

// api/users
router //[ 
    .route("/")
    .get(allUsers)
    .post(createUser);
//]


// api/users/:userId
router //[
    .route("/:userId")
    .get(singleUser)
    .put(updateUser)
    .delete(deleteUser);

//]

module.exports = router;



