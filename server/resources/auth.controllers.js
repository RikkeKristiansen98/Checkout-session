const { log } = require("console");
const fetchUsers = require("../utils/fetchUsers");
const fs = require("fs").promises;
const bcrypt = require("bcrypt");
const initStripe = require("../stripe");

const register = async (req, res) => {
  const { email, password } = req.body;
  const stripe = initStripe();

  const users = await fetchUsers();
  const userAlreadyExists = users.find((u) => u.email === email);

  if (userAlreadyExists) {
    return res.status(400).json("User already exists");
  }

  const customer = await stripe.customers.create({
    email,
  });

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = {
    email,
    password: hashedPassword,
    stripeId: customer.id,
  };
  users.push(newUser);

  await fs.writeFile("./data/users.json", JSON.stringify(users, null, 2));
  res.status(201).json(newUser.email);
};

const login = async (req, res) => {
  const { email, password } = req.body;

  const users = await fetchUsers();
  const userExists = users.find((u) => u.email === email);

  if (!userExists || !(await bcrypt.compare(password, userExists.password))) {
    return res.status(400).json("Wrong user or password");
  }

  req.session.user = userExists;
  res.status(200).json(userExists);
};

const logout = (req, res) => {
  req.session = null;
  res.status(200).json("Logged out");
};

const authorize = (req, res) => {
  if (!req.session.user) {
    return res.status(401).json("You are not logged in");
  }
  res.status(200).json(req.session.user.email);
};

module.exports = { register, login, logout, authorize };