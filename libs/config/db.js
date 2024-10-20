import mongoose from "mongoose"

export const connectDB = async()=>{
  await mongoose.connect('mongodb+srv://nifaduzzaman2005:nifad2005@cluster0.ozz3a.mongodb.net/nPost')
  console.log("Connected db")
} 