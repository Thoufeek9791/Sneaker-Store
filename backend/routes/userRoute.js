const express = require("express");
const {
  registerUser,
  loginUser,
  logoutUser,
  forgotPassword,
  resetPasword,
  getUserDetails,
  updateUserPassworrd,
  updateProfile,
  getAllUsers,
  getSpecificUser,
  updateUserRole,
  deleteUser,
} = require("../controllers/userController");

const {isAuthenticatedUser, authorizeRoles} = require('../middleware/auth')

const router = express.Router();

//* register route
router.route("/register").post(registerUser);

//* login route
router.route("/login").post(loginUser);

//* forgot password route
router.route("/password/forgot").post(forgotPassword);

//* reset password route
router.route("/password/reset/:token").put(resetPasword);

//* logout route
router.route("/logout").get(logoutUser);

//* User/Admin Profile route
router.route('/me').get(isAuthenticatedUser, getUserDetails)

// *User/Admin Password Update route
router.route('/password/update').put(isAuthenticatedUser, updateUserPassworrd)

//* Update User Profile
router.route('/me/update').put(isAuthenticatedUser, updateProfile)

//* GET ALL USERS --ONLY FOR ADMIN
router.route('/admin/users').get(isAuthenticatedUser, authorizeRoles('admin'), getAllUsers)

///* GET SPECIFIC USERS --ONLY FOR ADMIN
router.route('/admin/user/:id').get(isAuthenticatedUser, authorizeRoles('admin'), getSpecificUser).put(isAuthenticatedUser, authorizeRoles('admin'), updateUserRole).delete(isAuthenticatedUser, authorizeRoles('admin'), deleteUser)

module.exports = router;
