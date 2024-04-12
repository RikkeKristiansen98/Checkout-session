const express = require ("express")
const cookieSession = require("cookie-session")
const cors = require("cors")
require("dotenv").config()

const userRouter = require("./resources/users.router")
const authRouter = require("./resources/auth.router")
const stripeRouter = require("./resources/stripe.router")

const app = express()

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))
app.use(express.json())
app.use(cookieSession({
    secret: "r2kr3j",
    maxAge: 1000 * 60 * 60 * 24,
}))

//Routes
app.use("/api/users", userRouter);
app.use("/api/auth", authRouter);
app.use("/payments", stripeRouter);

app.listen(3001, () => console.log("Server is running🐒"))