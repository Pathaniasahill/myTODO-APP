import express from "express"
import dotenv from "dotenv"

import cors from "cors"
import connectdb from "./CONFIG/db.js"
import register from "./Routes/registerroute.js"
import login from "./Routes/loginroute.js"
import addtask from "./Routes/addtask.js"
import gettask from "./Routes/gettask.js"
import deletetask from "./Routes/deletetask.js"


dotenv.config()
connectdb()

const app= express();
app.use(cors())
app.use(express.json()) // to read jsonbody
const PORT = process.env.PORT;
app.listen(PORT,()=>{
    console.log(`✅ Server running on port ${PORT}`)
    
})
app.post("/api/register",register)
app.post("/api/login",login)
app.post("/api/addtask",addtask)
app.post("/api/gettask",gettask)
app.post("/api/deletetask",deletetask)

export default app