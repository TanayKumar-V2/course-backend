import { Router } from "express";
import User from "../models/user.model.js";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
dotenv.config();

const router = Router();

router.post("/signup", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      res.status(401).send("Incomplete credentials!!");
    }
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      res.send("User already exists!!");
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();
    res.status(201).send("Succesfully created user");
  } catch (err) {
    res.status(500).send("Server error");
    console.error(err);
  }
});

router.post("/signin", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(401).send("Incomplete credentials!!");
    }
    const user = await User.findOne({ email });
    if (!user) {
      res.status(400).send("User not found");
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      res.send("Invalid Credentials");
    }
    const payload = { id: user._id, email: user.email };
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });
    res.json({ message: "Logged in successfully!", token });
  } catch (err) {
    console.error(err);
    console.log("Error signing in");
  }
});


export default router