import Image from 'next/image'
import React from 'react'

function Header() {
  return (
    <nav className='p-5 md:px-12 lg:px-28 '>
      <div className='flex justify-between items-center '>
        <h1 className='text-4xl' > nPost</h1>
        <button className='px-4 py-2 border'>Get started</button>
      </div>
      <div className='text-center my-8'>
        <h1 className='text-4xl font-medium'>Latest Blogs</h1>
        <p className='mt-10 max-w-[740px] m-auto text-xs sm:text-base'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium, ipsum.</p>
        <form className='flex justify-between max-w-[500px] mx-auto mt-8 ' action="
        ">
          <input type="email" placeholder='Enter your email' className='pl-4 w-full border-black py-1 gap-1 border outline-none'/>
          <button className=' border-y border-r border-black py-2 px-4 active:bg-gray-600 active:text-white'>Subscribe</button>


        </form>

      </div>
      
    </nav>
  )
}

export default Header
