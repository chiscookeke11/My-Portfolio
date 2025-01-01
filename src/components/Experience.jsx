import React from 'react'
import { experience } from '../assets/assets'

const Experience = () => {
  return (
    <div className='bg-[#111827] w-full py-24 lg:px-20 px-[5%] flex flex-col items-center justify-center gap-5 text-white ' >
    <div className='flex items-center justify-center flex-col gap-2 text-center' >
    <h1 className='bg-[#374151] px-5 py-1 rounded-xl font-[500] text-sm text-[#D1D5DB] w-fit ' >Experience</h1>
    <p className='text-lg  ' >Here is a quick summary of my most recent experiences:</p>
    </div>


    <div className='jobs w-full flex flex-col gap-5' >

 
       {experience.map((item, index)=> (
         <div className='w-full flex flex-col md:flex-row items-start justify-evenly bg-[#1F2937] gap-5 px-4 py-7 overflow-hidden rounded-lg ' >
         <div className=' basis-1/3' ><img src={item.image} alt="" className='w-[100px] ' /> </div>
         <div className=' basis-1/3 '> <h1 className='text-lg font-bold mb-2' >{item.role} </h1>

           <ul  className='list-disc pl-4'  >
             <li className='text-[#D1D5DB] font-normal text-base my-2 ' > {item.tasks.task1} </li>
             <li className='text-[#D1D5DB] font-normal text-base my-2 '>{item.tasks.task2}</li>
           </ul>





         </div>



         <div className=' basis-1/3 flex md:justify-end text-[#D1D5DB] font-normal text-base'>{item.duration} </div>
     </div>
       ))}
        
    </div>









</div>


    
  )
}

export default Experience