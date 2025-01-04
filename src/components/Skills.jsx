import React from 'react'
import { skills } from '../assets/assets'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Skills = ({darkMode}) => {

  return (
    <div 
    data-aos="fade-in"
    data-aos-delay="50"
    data-aos-duration="500"
    data-aos-once="true"
    data-aos-easing="ease-in-out"
    className={` w-full py-24 lg:px-20 px-[5%] flex flex-col items-center justify-center gap-5  ${darkMode? "bg-[#030712] text-white" : "bg-[#ffffff] text-[#4B5563] " } `} >
      <div className='flex items-center justify-center flex-col gap-2 text-center' >
      <h1 className={` px-5 py-1 rounded-xl font-[500] text-sm  w-fit ${darkMode? "bg-[#374151] text-[#D1D5DB] " : "bg-[#E5E7EB] text-[#4B5563] " } `} >Skills</h1>
      <p className='text-lg  ' >The skills, tools and technologies I am really good at:</p>
      </div>
      




      <div className='display my-3 flex flex-row justify-evenly flex-wrap items-center w-full gap-2 ' >

        {
          skills.map((skill, index) =>(
            <div key={index} className='flex flex-col items-center justify-center gap-1 w-[88px] h-[92px]  my-3 mx-1 text-center  ' >
              <img src={skill.image} alt={skill.name} className='w-[50px] object-contain  ' />
              <h1 className={` font-normal text-base ${darkMode? "text-[#D1D5DB]" : "null"} `} >{skill.name} </h1>
            </div>
          ) )
        }

      </div>
        

    </div>
  )
}

export default Skills