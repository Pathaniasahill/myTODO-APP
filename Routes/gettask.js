import Task from "../models/task.js";

const gettask = (req,res)=>{
const email= req.body.email;
Task.find({email:email}).then((data)=>{
    res.status(200).send({message:"task fetched successfully",task:data})
})
}
export default gettask