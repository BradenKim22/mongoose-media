const router = require('express').Router();
const {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend
} = require('../../controllers/userController.js');

// /api/users
router.route('/').get(getUsers).post(createUser);

// /api/users/:userID
router
  .route('/:userID')
  .get(getUser)
  .put(updateUser)
  .delete(deleteUser);

module.exports = router;
