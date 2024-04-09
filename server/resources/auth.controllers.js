const fetchUsers = require("../utils/fetchUsers")
const fs = require("fs").promises
const bcrypt = require("bcrypt")

const register = async (req, res) => {

  const { email, password } = req.body

// kolla om användaren redan finns
const users = await fetchUsers()
const userExists = users.find(u => u.email === email)

if (userExists) {
    return res.status(400).json("user already exists")
}
//kryptera lösenord
const hashedPassword = await bcrypt.hash(password, 10)

//spara till databas
const newUser = {
    email, 
    password: hashedPassword
}
users.push(newUser)
await fs.writeFile("./data/users.json", JSON.stringify(users, null, 2))
//Skicka tillbaka svar
res.status(201).json(newUser)
}

module.exports = { register }