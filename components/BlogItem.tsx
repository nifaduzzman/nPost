"use client"
import Image from 'next/image'
import React from 'react'
import image from '../assets/image.jpg'
import { MdOutlineReadMore } from "react-icons/md";
import Link from 'next/link';
function BlogItem(d:any) {
  console.log(d.data)
  return (
    <div className='max-w-[330px] sm:max-w-[300px] bg-white border-black hover:bg-slate-500 border flex flex-col gap-4'>
      <Link href={`/blogs/${d.data.id}`}>
      <Image src={image} alt='image' width={360} height={360}/>
      <p className='px-2 py-1  w-fit ml-8'>{d.data.category}</p>

      <div>
        <h5 className='text-black font-semibold text-lg '>{d.data.title}</h5>
        <p>{d.data.description}</p>
      </div>
      <div className='flex  items-center gap-2 text-lg w-full justify-end px-8'>
        <p>read more</p>
        <MdOutlineReadMore />
      </div>
      </Link>
      
    </div>
  )
}

export default BlogItem
