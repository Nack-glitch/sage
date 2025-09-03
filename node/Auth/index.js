const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const app = express();
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/abay")
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error(err));

const User = mongoose.model("User", new mongoose.Schema({
  name: String,
  phoneNumber: { type: Number, unique: true },
  gender: String,
  password: String,
  balance: { type: Number, default: 0 },
  role: { type: String, enum: ["user", "admin"], default: "user" }
}));

const auth = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) return res.status(401).json({ message: "No token" });

  jwt.verify(token, "sage", (err, user) => {
    if (err) return res.status(403).json({ message: "Unauthorized" });
    req.user = user;
    next();
  });
};


const isAdmin = (req, res, next) => {
  if (req.user.role !== "admin") return res.status(403).send("Admins only");
  next();
};

app.post("/register", async (req, res) => {
  const { name, phoneNumber, gender, password, role } = req.body;
  const hashed = await bcrypt.hash(password, 8);
  const user = new User({ name, phoneNumber, gender, password: hashed, role });
  await user.save();
  res.send("User registered");
});

app.post("/login", async (req, res) => {
  const { phoneNumber, password } = req.body;
  const user = await User.findOne({ phoneNumber });
  if (!user || !(await bcrypt.compare(password, user.password)))
    return res.status(400).send("Invalid credentials");

  const token = jwt.sign({ id: user.id, role: user.role }, "sage", { expiresIn: "1d" });
  res.json({ token });
});

app.get("/balance", auth, async (req, res) => {
  const user = await User.findById(req.user.id);
  res.send(`Hello ${user.name}, Balance: ${user.balance}`);
});

app.get("/admin/users", auth, isAdmin, async (req, res) => {
  res.json(await User.find());
});

app.listen(5800, () => {
  console.log("Server running on 5800")
});
