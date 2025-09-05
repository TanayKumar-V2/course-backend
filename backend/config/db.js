import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

const connectDb=async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Database Connected")
    }catch(err){
        console.log("Failed to connect")
        console.error(err)
    }
}

export default connectDb