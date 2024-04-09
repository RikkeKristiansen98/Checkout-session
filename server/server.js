const express = require ("express")
const userRouter = require("./resources/users.router")
const authRouter = require("./resources/auth.router")


const app = express()

app.use(express.json())

//Routes
app.use("/api/users", userRouter);
app.use("/api/auth", authRouter);


app.listen(3001, () => console.log("Server is running🐒"))