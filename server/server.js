const express = require ("express")
const cookieSession = require("cookie-session")
const cors = require("cors")

const userRouter = require("./resources/users.router")
const authRouter = require("./resources/auth.router")
const stripeRouter = require("./resources/stripe.router")
const productsRouter = require("./resources/products.router") 

const app = express()

app.use(cors({
    origin: ["http://localhost:5173","http://localhost:3001"],
    credentials: true
}))
app.use(express.json())
app.use(cookieSession({
    name: "session",
    secret: "r2kr3j",
    maxAge: 1000 * 60 * 60 * 24,
}))

app.use("/api/users", userRouter);
app.use("/api/auth", authRouter);
app.use("/payments", stripeRouter);
app.use("/api/products", productsRouter);

app.listen(3001, () => console.log("Server is running🐒"))