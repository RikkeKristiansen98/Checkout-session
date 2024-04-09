const express = require ("express")
const cookieSession = require("cookie-session")

const userRouter = require("./resources/users.router")
const authRouter = require("./resources/auth.router")


const app = express()

app.use(express.json())
app.use(cookieSession({
    secret: "r2kr3j",
    maxAge: 1000 * 60 * 60 * 24,
}))

//Routes
app.use("/api/users", userRouter);
app.use("/api/auth", authRouter);


app.listen(3001, () => console.log("Server is running🐒"))