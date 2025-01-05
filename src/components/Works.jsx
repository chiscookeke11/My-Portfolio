import React, { useEffect, useState } from 'react'
import { projects } from '../assets/assets'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Works = ({darkMode}) => {
   useEffect(()=> {
          AOS.init({once: true});
      }, [darkMode]);
  

    const [slice, setSlice] =  useState(3)

    const increaseSlice = () => {
        setSlice((prevSlice) => Math.min(prevSlice + 2), projects.length )
    }



  return (
    <div
    data-aos="fade-in"
    data-aos-delay="50"
    data-aos-duration="500"
    data-aos-easing="ease-in-out" 
    data-aos-once="true"
     id='work' className={` w-full py-24 lg:px-20 px-[5%] flex flex-col items-center justify-center gap-5  ${darkMode?"bg-[#030712] text-white" : "bg-[#ffffff] text-[#4B5563] " }  `} >
    <div className='flex items-center justify-center flex-col gap-2 text-center' >
    <h1 className={` px-5 py-1 rounded-xl font-[500] text-sm w-fit  ${darkMode? "bg-[#374151]  text-[#D1D5DB]" : "bg-[#E5E7EB] "} `} >Works</h1>
    <p className='text-lg  ' >Some of the noteworthy projects I have built:</p>
    </div>



    <div className='flex flex-col gap-7 items-center justify-center mt-4 w-full   ' >

        {projects.slice(0, slice).map((project, index) => (
            <a key={index} href={project.link}>
            <div className={`py-2  rounded-[12px] overflow-hidden flex flex-col items-center lg:flex-row md:flex-row  w-[80vw] max-w-[1150px] h-auto md:h-[400px] lg:h-[400px] max-h-[650px] min-h-[400px] min-w-[330px] ${darkMode? null : "bg-[#ffffff] shadow-xl " } `} >
            <div className={` flex items-center justify-center w-[50%] min-w-[320px] h-[100%] min-h-[250px] rounded-t-[12px] md:rounded-tr-none md:rounded-tl-[12px] md:rounded-bl-[12px]  ${darkMode? "bg-[#374151]" : "bg-[#F9FAFB] border-[#F9FAFB] "} `} >
                <video src={project.video} autoPlay loop  muted className='w-[95%] object-contain rounded-[10px] '></video>
            </div>


            <div className={` flex flex-col items-start justify-between py-[5%] px-[3%] w-[50%] min-w-[320px] h-[100%] rounded-b-[12px] md:rounded-bl-none md:rounded-tr-[12px] md:rounded-br-[12px] ${darkMode? "bg-[#1F2937]" : "bg-[#fff] "} `} >
                <h1 className={` text-xl font-[500] my-2 ${darkMode? "text-white" : "text-[#111827] "} `} >{project.name} </h1>
                <p className={` text-base font-normal my-2 ${darkMode? "text-[#D1D5DB]" : "text-[#4B5563]"} `} >{project.Description}</p>
            

                <ul className='w-full flex flex-row flex-wrap items-center gap-3' >
                    <li className={`px-4 py-1  rounded-[12px] text-xs font-normal text-center ${darkMode?  "bg-[#374151]" : "bg-[#E5E7EB] " }`} >{project.languages.language1}</li>
                    <li className={`px-4 py-1  rounded-[12px] text-xs font-normal text-center ${darkMode?  "bg-[#374151]" : "bg-[#E5E7EB] " }`}>{project.languages.language2}</li>
                    <li className={`px-4 py-1  rounded-[12px] text-xs font-normal text-center ${darkMode?  "bg-[#374151]" : "bg-[#E5E7EB] " }`}>{project.languages.language3}</li>
                </ul>
            </div>
        </div>
        </a>
        ))  }




<button onClick={increaseSlice} disabled={slice >= projects.length} className={`mt-5  font-bold px-4 py-2  rounded-[6px] ${darkMode? "bg-[#374151]" : "bg-[#E5E7EB] text-[#4B5563]" } ${slice >= projects.length? "cursor-not-allowed" : null } `} >See More</button>






        





















    </div>




    </div>
  )
}

export default Works