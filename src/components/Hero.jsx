import React from 'react'
import { FaGithub, FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

const Hero = () => {
  return (
    <div className='min-h-[75vh]  bg-[#030712] flex flex-row justify-between items-center text-white py-4 lg:px-[4%] px-2 flex-wrap  ' >


        <div className='max-w-[700px] w-[50vw] min-w-[350px] flex flex-col justify-around gap-5 mx-auto px-2 ' >

            <span className='block  ' >
            <h1 className='font-[700] text-4xl lg:text-6xl leading-10 mb-3 ' >Hi, I’m Chinedu 👋</h1>
            <p className='text-[#D1D5DB] text-base font-normal leading-[24px]  ' >I'm a frontend developer with expertise in React.js and Next.js, passionate about creating exceptional digital experiences that are fast, accessible, visually appealing, and responsive. With over 3 years of experience building web applications, I approach each project with the same excitement and dedication as when I first started.</p>

            </span>


            <span className='my-6 flex flex-col  gap-2 w-full text-base text-[#D1D5DB] font-normal ' >
                <p className='flex items-center gap-3' ><FaMapMarkerAlt className='text-2xl' /> Enugu, Nigeria  </p>
                <p className='flex items-center gap-3'><span className='w-[7px] h-[7px] rounded-[50%] bg-[#10B981] ' ></span> Available for new projects  </p>
            </span>


            <span className='flex flex-row items-center gap-2 text-2xl ' >
                <a href="https://github.com/chiscookeke11"><FaGithub/> </a>
                <a href="https://x.com/chisco_JS"><FaXTwitter/> </a>
                <a href="https://www.linkedin.com/in/chinedu-okeke-4080b8292/"><FaLinkedin/> </a>
            </span>

        </div>


        <div className='w-[270px] h-[300px] relative bg-[#374151] mx-auto lg:mt-0 md:mt-0 mt-12 ' > 
            <img src="https://pbs.twimg.com/profile_images/1871201808833458176/V0e3__w1_400x400.jpg" alt="" className='w-full h-full absolute top-[-9%] left-[-11%] object-cover border-8 border-[#030712] '  />
        </div>




        </div>
  )
}

export default Hero