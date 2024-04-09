const cors = require("cors")
const express = require ("express")
const userRouter = require("./resources/users.router")

const app = express()

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))

app.use(express.json())

//Routes
app.use("/api/users", userRouter);

app.listen(3001, () => console.log("Server is running🐒"))