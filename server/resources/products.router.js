const express = require("express")
const { listProducts } = require("../resources/products.controllers")
const router = express.Router()

router.get("/", listProducts)

module.exports = router