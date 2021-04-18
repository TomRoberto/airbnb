const express = require("express");
const router = express.Router();
const uid2 = require("uid2");
const SHA256 = require("crypto-js/sha256");
const encbase64 = require("crypto-js/enc-base64");

const User = require("../models/User");

router.post("user/signup", async (req, res) => {
  try {
    const userEmail = await User.findOne({ email: req.fields.email });
    const userUsername = await User.findOne({ username: req.fields.username });
    if (userEmail) {
      res.status(400).json({ error: "This email already have an account" });
    } else if (userUsername) {
      res.status(400).json({ error: "This username already has an account" });
    } else {
      if (
        req.fields.email &&
        req.fields.password &&
        req.fields.username &&
        req.fields.name &&
        req.fields.description
      ) {
      } else {
        req.status(400).json({ error: "Missing parametres" });
      }
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
