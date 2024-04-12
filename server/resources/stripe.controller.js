const initStripe = require("../stripe")
const fs = require("fs").promises

const createCheckoutSession = async (req, res) => {

const cart = req.body

const stripe = initStripe()

const session = await stripe.checkout.sessions.create ({
    mode: "payment",
    line_items: cart.map(item => {
        return {
            price: item.product,
            quantity: item.quantity
        }
    }),
    success_url: "http://localhost:5173/Confirmation",
    cancel_url: "http://localhost:5173",
})

res.status(200).json({ url: session.url, sessionId: session.id })
}

const verifySession = async(req, res) => {
    const stripe = initStripe()

    const sessionId = req.body.sessionId

   const session = await stripe.checkout.sessions.retrieve(sessionId)

   if (session.payment_status === "paid") {
    const lineItems = await stripe.checkout.sessions.listLineItems(sessionId)

    const order = {
        orderNumber: Math.floor(Math.random() * 10000000),
        customerName: session.customer_details.name,
        products: lineItems.data.map((item) => ({
          description: item.description,
          quantity: item.quantity,
        })),
        total: (session.amount_total / 100).toFixed(2),
        date: new Date(),
      }

      const orders = JSON.parse(await fs.readFile("./data/orders.json"))
      orders.push(order)
      await fs.writeFile("./data/orders.json", JSON.stringify(orders, null, 4))

      res.status(200).json({ verified: true })
}
}
module.exports = { createCheckoutSession, verifySession }