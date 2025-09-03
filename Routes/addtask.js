import express from "express"
import mongoose from "mongoose"
import Task from "../models/task.js";

const addingtask=async(req,res)=>{
    try {
         const{email,task}=req.body;
    const taskk= new Task ({email:email,taskitem: task});
    await taskk.save();
    res.status(200).send({message:"task added successfully"})

    } catch (error) {
        res.status(400).send({message:`${error.message}`})
        
    }
    

}
export default addingtask