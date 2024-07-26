const express = require("express");

const router = express.Router();
const productController = require("../controller/productController");

router.post("/create-product", productController.createProduct); //product creation

router.get("/allproducts", productController.products); // all product fetching

router.get("/allproducts/:id",productController.product); // single product fetchin

router.put("/allproducts/:id", productController.updatedProduct); // product update

router.delete("/allproducts/:id", productController.deleteProduct); // product delete

module.exports = router;