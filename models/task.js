import mongoose from "mongoose";
const taskschema= new mongoose.Schema({
    email:{type:String,required:true},
    taskitem:{type:String,required:true}
})

const Task=mongoose.model("Task",taskschema)
export default Task