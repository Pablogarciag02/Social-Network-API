const router = require("express").Router()

const {
    createUser,
    allUsers,
    singleUser,
    deleteUser,
    updateUser,
    newFriend,
    deleteFriend,
    

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


//api/users/:userId/friends/:friendId
router //[
    .route("/:userId/friends/:friendId")
    .post(newFriend)
    .delete(deleteFriend);
//]

module.exports = router;



