const express = require("express");
const path = require("path");
// const rootDir = require("../util/path");
const adminController = require("../controllers/admin");

const router = express.Router();

//Allows us to add new middleware functions

//add-product = get
router.get("/add-product", adminController.getAddProduct);

router.get("/products",adminController.getProducts);

//add-product = post
router.post("/add-product",adminController.postAddProduct);

module.exports=router;
