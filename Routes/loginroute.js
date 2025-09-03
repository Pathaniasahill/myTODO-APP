import express from "express"
import User from "../models/user.js"

const login=async(req,res)=>{
    try {
    const { email, password} = req.body;

    // 1️⃣ Check if user already exists
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      return res.status(400).send({message:"user not find"})
    }else{
         if(existingUser.password==password){
            return res.status(200).send({message:"login successfull",email:existingUser.email})
         }else{
            return res.status(400).send({message:"invalid password"})
         }
     
    }

   
}catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
}
export default login