const express = require("express");
const path = require("path");
// const rootDir = require("../util/path");
const productsController = require("../controllers/products");

const router = express.Router();



//Allows us to add new middleware functions

//add-product = get
router.get("/add-product", productsController.getAddProduct);

//add-product = post
router.post("/add-product",productsController.postAddProduct);

module.exports=router;
