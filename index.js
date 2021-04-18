const express = require("express");
const formidable = require("express-formidable");
const mongoose = require("mongoose");
const cors = require("cors");
const helmet = require("helmet");

const app = express();
app.use(formidable());
app.use(helmet());
app.use(cors());

mongoose.connect("mongodb://localhost/airbnb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

const userRoutes = require("./routes/user");
app.use(userRoutes);

app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to the airbnb API" });
});

app.all("*", (req, res) => {
  res.status(404).json({ error: "Page not found" });
});

app.listen(3000, () => {
  console.log("Server started");
});
