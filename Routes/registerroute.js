import express from "express"
import User from "../models/user.js"

const register=async(req,res)=>{
    try {
    const { firstname, lastname, mobilenumber, email, password, location } = req.body;

    // 1️⃣ Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists--Try login" });
    }

    // 2️⃣ Create new user
    const user = new User({ firstname, lastname, mobilenumber, email, password, location });
    await user.save();

    // 3️⃣ Respond success
    res.status(201).json({ message: "User registered successfully", user });
}catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
}
export default register