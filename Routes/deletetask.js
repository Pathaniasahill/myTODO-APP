import Task from "../models/task.js";
const deletetask = async(req,res)=>{
   const id= req.body.id;
   
   try {
     const deletedtask= await Task.findByIdAndDelete(id);
     console.log("Deleting task with id:", id);
     if(deletedtask){
res.status(200).send({message:"task deleted successfully"})
     }else{
        res.status(400).send({message:"task not found"})
     }
        
   } catch (error) {
    res.status(500).send({message:`abc${error.message}`})
  }
}
export default deletetask