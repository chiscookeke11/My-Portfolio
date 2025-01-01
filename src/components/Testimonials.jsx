import React from 'react'
import {testimonials} from "../assets/assets"

const Testimonials = () => {
  return (
    <div className='bg-[#111827] w-full py-24 lg:px-20 px-[5%] flex flex-col items-center justify-center gap-5 text-white ' >
    <div className='flex items-center justify-center flex-col gap-2 text-center' >
    <h1 className='bg-[#374151] px-5 py-1 rounded-xl font-[500] text-sm text-[#D1D5DB] w-fit ' >Testimonials</h1>
    <p className='text-lg  ' >Nice things people have said about me:</p>
    </div>

    <div className='flex flex-col lg:flex-row justify-center gap-4 items-center my-6 w-full'  >
{
  testimonials.map((item, index) => (
    <div className='w-2/4 bg-[#1F2937] flex flex-col justify-between items-center gap-3 min-w-[250px] max-w-[300px] py-3 px-2 rounded-[12px] text-center ' >
    <img src={item.image} alt="" className='w-[100px] h-[100px] rounded-full object-cover ' />
    <p className='text-[#D1D5DB]  text-base font-normal ' >{item.testament}</p>

    <h1 className='text-lg font-bold ' >{item.name} </h1>
 </div>
  )) 
}

     

    </div>









    </div>
  )
}

export default Testimonials