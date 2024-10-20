import { NextResponse } from "next/server";
import {connectDB} from '../../../libs/config/db'
import blog from '../../../libs/models/BlogModel'
const connect = async()=>{
  await connectDB()
}
connect()

export async function GET(request){
  await connectDB()
  return NextResponse.json({message:"Hited this get function"})
}

export async function POST(request) {


  
        // const Schema = new Schema({
        //   title:DETAILS,
        //   description:DETAILS,
        //   category:DETAILS,
        //   author:DETAILS,
        //   date:{
        //     type:Date,
        //     default:Date.now()
        //   }
        // }

  const formData = await request.json();
 
  await blog.create(formData)

  return NextResponse.json({message:true},{status:201})
  
}