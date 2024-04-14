const initStripe = require("../stripe");
const fs = require("fs").promises;

const createCheckoutSession = async (req, res) => {
  const cart = req.body;
  const stripe = initStripe();

  // en array av line_items baserat på datan från klienten
  const lineItems = cart.map((item) => {
    return {
      price: item.product.default_price.id,
      quantity: item.quantity,
    };
  });

  try {
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      customer: req.session.user.stripeId,
      line_items: lineItems, 
      allow_promotion_codes: true,
      success_url: "http://localhost:5173/confirmation",
      cancel_url: "http://localhost:5173/",
    });

    res.status(200).json({ url: session.url, sessionId: session.id });
  } catch (error) {
    console.error("Error creating checkout session:", error);
    res.status(500).json({ error: "An error occurred while creating checkout session" });
  }
};


const verifySession = async (req, res) => {
  const stripe = initStripe();

  const sessionId = req.body.sessionId;
  const session = await stripe.checkout.sessions.retrieve(sessionId);

  if (session.payment_status === "paid") {
    const lineItems = await stripe.checkout.sessions.listLineItems(sessionId);

    const order = {
      orderNumber: Math.floor(Math.random() * 1000000),
      customerName: session.customer_details.email,
      products: lineItems.data,
      total: session.amount_total,
      date: new Date(),
    };
    const orders = JSON.parse(await fs.readFile("./data/orders.json"));
    orders.push(order);

    await fs.writeFile("./data/orders.json", JSON.stringify(orders, null, 4));
    res.status(200).json({ verified: true });
  }

  console.log(session);
};

module.exports = { createCheckoutSession, verifySession };