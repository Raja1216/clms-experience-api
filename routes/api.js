const express = require("express");
const router = express.Router();
const { read, store } = require("../app/controllers/ProductController");

/* GET home page. */
router.get("/product", read);
router.post("/product", store);

module.exports = router;
