const express = require("express")
const { createCheckoutSession, verifySession } = require("../resources/stripe.controller")
const router = express.Router()

router.post("/create-checkout-session", createCheckoutSession)
router.post("/verify-session", verifySession); 


module.exports = router;