const express = require("express")
const { getUsers } = require("../resources/users.controllers")
const router = express.Router()

router.get("/", getUsers)

module.exports = router