require('dotenv').config();
const Stripe = require("stripe")
const stripe = Stripe(process.env.STRIPE_KEY);


const listProducts = async (req, res) => {
    try {
    const products = await stripe.products.list({
        expand: ["data.default_price"]
    })
    res.status(200).json(products)
    } catch (error) {
        console.log(error)
        res.status(400).json(error)
    }
}

module.exports = { listProducts }