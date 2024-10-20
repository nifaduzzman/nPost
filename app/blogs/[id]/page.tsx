"use client"
import React, { useEffect, useState } from 'react'
import {data} from '../../../assets/data'


function page({params}:any) {
  const [post,setPost] = useState<any>(null)
  useEffect(()=>{
    setPost(data.find((item:any)=>item.id === Number(params.id)))
  },[]) 
 
  return (
    <>
      {
        post===null||undefined?<div>Nothing</div>:(

          <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-md mt-10">
        {/* Post Title */}
        <h1 className="text-3xl font-bold text-gray-800 mb-4">{post.title}</h1>

        {/* Post Info */}
        <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
          <p>
            <span className="font-semibold">Author:</span> {post.author}
          </p>
          <p>
            <span className="font-semibold">Category:</span> {post.category}
          </p>
          <p>{post.date}</p>
        </div>

        {/* Post Description */}
        <p className="text-lg text-gray-700 leading-relaxed">{post.description}</p>
      </div>
      )
    }
    </>
  )
}

export default page
