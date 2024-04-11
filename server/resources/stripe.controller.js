const initStripe = require("../stripe")

const createCheckoutSession = async (req, res) => {

 const stripe = initStripe()

const session = await stripe.checkout.sessions.create ({
    mode: "payment",
    line_items: [{
        price:"price_1P3EnLFbdLADhBwOFMT7FcPx",
        quantity: 2,
    }],
    success_url: "http://localhost:5173/Confirmation",
    cancel_url: "http://localhost:5173",
})

res.status(200).json({ url: session.url, sessionId: session.id })
}

module.exports = { createCheckoutSession }