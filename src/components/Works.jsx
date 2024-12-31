import React, { useState } from 'react'
import { projects } from '../assets/assets'

const Works = () => {

    const [slice, setSlice] =  useState(2)

    const increaseSlice = () => {
        setSlice((prevSlice) => Math.min(prevSlice + 2), projects.length )
    }



  return (
    <div className='bg-[#030712] w-full py-24 lg:px-20 px-[5%] flex flex-col items-center justify-center gap-5 text-white ' >
    <div className='flex items-center justify-center flex-col gap-2 text-center' >
    <h1 className='bg-[#374151] px-5 py-1 rounded-xl font-[500] text-sm text-[#D1D5DB] w-fit ' >Works</h1>
    <p className='text-lg  ' >Some of the noteworthy projects I have built:</p>
    </div>



    <div className='flex flex-col items-center justify-center mt-4 w-full   ' >

        {projects.slice(0, slice).map((project, index) => (
            <div className='py-2  rounded-[12px] overflow-hidden flex flex-col items-center lg:flex-row md:flex-row  w-[80vw] max-w-[1150px] h-auto md:h-[400px] lg:h-[400px] max-h-[650px] min-h-[400px] min-w-[330px] ' >
            <div className='bg-[#374151] flex items-center justify-center w-[50%] min-w-[320px] h-[100%] min-h-[250px] rounded-t-[12px] md:rounded-tr-none md:rounded-tl-[12px] md:rounded-bl-[12px] ' >
                <img src={project.image} className='w-[90%] object-contain '  alt="" />
            </div>


            <div className='bg-[#1F2937] flex flex-col items-start justify-between py-[5%] px-[3%] w-[50%] min-w-[320px] h-[100%] rounded-b-[12px] md:rounded-bl-none md:rounded-tr-[12px] md:rounded-br-[12px] ' >
                <h1 className='text-white text-xl font-[500] my-2 ' >{project.name} </h1>
                <p className='text-[#D1D5DB] text-base font-normal my-2  ' >{project.Description}</p>
            

                <ul className='w-full flex flex-row flex-wrap items-center gap-3' >
                    <li className='px-4 py-1 bg-[#374151] rounded-[12px] text-xs font-normal text-center ' >{project.languages.language1}</li>
                    <li  className='px-4 py-1 bg-[#374151] rounded-[12px] text-xs font-normal text-center '>{project.languages.language2}</li>
                    <li  className='px-4 py-1 bg-[#374151] rounded-[12px] text-xs font-normal text-center '>{project.languages.language3}</li>
                </ul>
            </div>
        </div>
        ))  }




<button onClick={increaseSlice} disabled={slice >= projects.length} className='mt-5  font-bold px-4 py-2 bg-[#374151] rounded-[6px] ' >See More</button>






        





















    </div>




    </div>
  )
}

export default Works