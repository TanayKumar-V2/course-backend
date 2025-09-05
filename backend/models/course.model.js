import mongoose from "mongoose";

const courseSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    courseId:{
        type:String,
        reuqired:true,
        unique:true
    },
    imageUrl:{
        type:String,
    },
    topics:{
        type:String,
        required:true
    },
    offeredBy:{
        type:String,
        reuqired:true
    }
},{timestamps:true})

const Course=mongoose.model('Course',courseSchema)
export default Course