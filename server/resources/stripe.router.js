const express = require("express")
const { createCheckoutSession, verifySession } = require("./stripe.controller")
const router = express.Router()
const stripe = require("../stripe")

router.post("/create-checkout-session", createCheckoutSession)
router.post("/verify-session", verifySession); 
router.get("/products", async (req, res) => {
    try {
        const stripeInstance = stripe();
        const products = await stripeInstance.products.list();
        res.json(products.data);
    } catch (error) {
        console.error("Error fetching products:", error);
        res.status(500).json({ error: "Failed to fetch products" });
    }
});

module.exports = router;