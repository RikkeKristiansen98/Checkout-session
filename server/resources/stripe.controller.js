const initStripe = require("../stripe")

const createCheckoutSession = async (req, res) => {

 const stripe = initStripe()

const session = await stripe.checkout.sessions.create ({
    mode: "payment",
    line_items: [{
        price:"price_1P3EnLFbdLADhBwOFMT7FcPx",
        quantity: 1,
    }],
    sucess_url: "http://localhost:5173/confirmation",
    cancel_url: "http://localhost:5173",
})

res.status(200).json({ url: session.url, sessionId: session.id })
}

module.exports = { createCheckoutSession }