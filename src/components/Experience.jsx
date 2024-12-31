import React from 'react'

const Experience = () => {
  return (
    <div className='bg-[#111827] w-full py-24 lg:px-20 px-[5%] flex flex-col items-center justify-center gap-5 text-white ' >
    <div className='flex items-center justify-center flex-col gap-2 text-center' >
    <h1 className='bg-[#374151] px-5 py-1 rounded-xl font-[500] text-sm text-[#D1D5DB] w-fit ' >Experience</h1>
    <p className='text-lg  ' >Here is a quick summary of my most recent experiences:</p>
    </div>


    <div className='jobs w-full flex flex-col gap-5' >


        <div className='w-full flex flex-row items-start justify-evenly bg-red-800' >
            <div className='bg-green-500' ><h2>Graso Logo</h2> </div>
            <div className='bg-green-500'> roles</div>
            <div className='bg-green-500'>Sept 2024 - Present </div>
        </div>
        
    </div>









</div>


    
  )
}

export default Experience