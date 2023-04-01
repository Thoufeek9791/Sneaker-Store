const express = require("express");
const {
  newOrder,
  getSingleOrder,
  myOrders,
  getAllorders,
  updateOrder,
  deleteOrder,
} = require("../controllers/orderController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

const router = express.Router();

//* New Order Route
router.route("/order/new").post(isAuthenticatedUser, newOrder);

//* GET SINGLE ORDER
router
  .route("/order/:id")
  .get(isAuthenticatedUser, getSingleOrder);

//* GET MY ORDERS
router.route("/orders/me").get(isAuthenticatedUser, myOrders);

// TODO: TEST THESE THREE ROUTES
router.route('/admin/orders').get(isAuthenticatedUser, authorizeRoles('admin'), getAllorders)

router.route('/admin/order/:id').put(isAuthenticatedUser, authorizeRoles('admin'), updateOrder).delete(isAuthenticatedUser, authorizeRoles('admin'), deleteOrder)

module.exports = router;
