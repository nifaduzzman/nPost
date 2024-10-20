"use client"
import React, { useState } from 'react'
import BlogItem from './BlogItem'
import {data} from '../assets/data'
function ItemList() {
  // console.log(data)
  const [menu, setMenu ] = useState("All")

  return (
    <div>
      <div className='flex justify-center gap-6 my-10'>
      <button onClick={(e)=>{setMenu("All")}} className={`${menu==="All"?"bg-black text-white py-1 px-4 rounded-md":null} `}>All</button>
        <button onClick={(e)=>{setMenu("Technology")}} className={`${menu==="Technology"?"bg-black text-white py-1 px-4 rounded-md":null} `}>Technology</button>
        <button onClick={(e)=>{setMenu("Startup")}}
          className={`${menu==="Startup"?"bg-black text-white py-1 px-4 rounded-md":null} `}
          >Startup </button>
        <button onClick={(e)=>{setMenu("Lifestyle")}}
          className={`${menu==="Lifestyle"?"bg-black text-white py-1 px-4 rounded-md":null} `}
          
          >Lifestyle</button>
      </div>
      <div className='flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mx-24'>
        {
          data.filter((item)=> menu ==="All"?true:item.category === menu).map((d)=>(
            <BlogItem key={data} data={d}/>
          ))

        }

      </div>
    </div>
  )
}

export default ItemList
