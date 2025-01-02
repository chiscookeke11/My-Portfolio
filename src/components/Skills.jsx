import React from 'react'
import { skills } from '../assets/assets'

const Skills = () => {
  return (
    <div className='bg-[#030712] w-full py-24 lg:px-20 px-[5%] flex flex-col items-center justify-center gap-5 text-white ' >
      <div className='flex items-center justify-center flex-col gap-2 text-center' >
      <h1 className='bg-[#374151] px-5 py-1 rounded-xl font-[500] text-sm text-[#D1D5DB] w-fit ' >Skills</h1>
      <p className='text-lg  ' >The skills, tools and technologies I am really good at:</p>
      </div>
      




      <div className='display my-3 flex flex-row justify-evenly flex-wrap items-center w-full gap-2 ' >

        {
          skills.map((skill, index) =>(
            <div key={index} className='flex flex-col items-center justify-center gap-1 w-[88px] h-[92px]  my-3 mx-1 text-center ' >
              <img src={skill.image} alt={skill.name} className='w-70px h-70px object-contain  ' />
              <h1 className='text-[#D1D5DB] font-normal text-base ' >{skill.name} </h1>
            </div>
          ) )
        }

      </div>
        

    </div>
  )
}

export default Skills