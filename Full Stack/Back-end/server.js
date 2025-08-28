const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());

const DATA_FILE = path.join(__dirname, "laptops.json");

function readLaptops() {
  if (!fs.existsSync(DATA_FILE)) fs.writeFileSync(DATA_FILE, "[]");
  return JSON.parse(fs.readFileSync(DATA_FILE));
}

function writeLaptops(laptops) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(laptops));
}

app.post("/api/laptops", (req, res) => {
  let laptops = readLaptops();
  const { name, madeIn, establishedYear } = req.body;

  if (!name || !madeIn || !establishedYear) {
    return res.status(400).json({ message: "All fields required" });
  }

  let id = laptops.length ? laptops[laptops.length - 1].id + 1 : 1;
  let newLaptop = { id, name, madeIn, establishedYear };

  laptops.push(newLaptop);
  writeLaptops(laptops);

  res.status(201).json(newLaptop);
});

app.get("/api/laptops", (req, res) => {
  res.json(readLaptops());
});

app.put("/api/laptops/:id", (req, res) => {
  let laptops = readLaptops();
  let id = parseInt(req.params.id);
  let index = laptops.findIndex(l => l.id === id);

  if (index === -1) return res.status(404).json({ message: "Laptop not found" });

  laptops[index] = { id, ...req.body };
  writeLaptops(laptops);

  res.json(laptops[index]);
});

app.delete("/api/laptops/:id", (req, res) => {
  let laptops = readLaptops();
  let id = parseInt(req.params.id);
  let newList = laptops.filter(l => l.id !== id);

  if (newList.length === laptops.length) return res.status(404).json({ message: "Laptop not found" });

  writeLaptops(newList);
  res.json({ message: "Laptop with ID " + id + " deleted" });
});

app.listen(5000, () => console.log("Server running on http://localhost:5000"));
