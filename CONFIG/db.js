import mongoose from "mongoose";

const connectdb=async()=>{
try {
    await mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
} catch (error) {
    console.error("something went wrong",error.message)
}
}
export default connectdb