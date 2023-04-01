const express = require("express");
const {
  getAllProducts,
  createProducts,
  updateProduct,
  deleteProduct,
  getProductDetails,
  createproductReview,
  getProductReviews,
  deleteReview,
} = require("../controllers/productController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

const router = express.Router();

//* GET ALL PRODUCTS
router.route("/products").get(getAllProducts);

//* CREATE NEW PRODUCTS -- only for admin
router
  .route("admin/products/new")
  .post(isAuthenticatedUser, authorizeRoles("admin"), createProducts);

//* UPDATE PRODUCTS -- and delete products only for admins delete the product
router
  .route("admin/products/:id")
  .put(isAuthenticatedUser, authorizeRoles("admin"), updateProduct)
  .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteProduct)


  //* TO GET SPECIFIC PRODUCTS
  router.route('/products/:id').get(getProductDetails)

  //* ADD REVIEW TO THE PRODUCT
  router.route('/review').put(isAuthenticatedUser,createproductReview)

  //* GET PRODUCT REVIEWS AND DELETE PARTICULAR PRODUCT REVIEW
  router.route('/reviews').get(isAuthenticatedUser, getProductReviews).delete(isAuthenticatedUser, deleteReview)



module.exports = router;
