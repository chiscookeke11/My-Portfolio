import React, { useEffect } from 'react'
import { FaGithub, FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = ({darkMode}) => {
    

    useEffect(()=> {
        AOS.init({once: true});
    }, [darkMode]);

 


  return (
    <div  data-aos="fade-in"
    data-aos-delay="50"
    data-aos-duration="500"
    data-aos-once="true"
    data-aos-easing="ease-in-out"
     className={`min-h-[75vh]   flex flex-row justify-between items-center  py-4 lg:px-[4%] px-2 flex-wrap ${darkMode? "bg-[#030712] text-white" : "bg-white text-[#030712] " } `} >


        <div className='max-w-[700px] w-[50vw] min-w-[300px] flex flex-col justify-around gap-5 mx-auto px-2 ' >

            <span className='block  ' >
            <h1 className='font-[700] text-3xl lg:text-5xl leading-10 mb-3 whitespace-nowrap ' >Hi, I’m Okeke Chinedu 👋</h1>
            <p className={` text-base font-normal leading-[24px] ${darkMode? "text-[#D1D5DB]" : "text-[#030712] " } `}   >Frontend developer specializing in React.js and Next.js, with 3 years' experience crafting fast, accessible, and responsive web applications. Committed to delivering exceptional digital experiences. </p>
            </span>


            <span className={`my-6 flex flex-col  gap-2 w-full text-base  font-normal ${darkMode? "text-[#D1D5DB]" : "text-[#030712]" }  `} >
                <p className='flex items-center gap-3' ><FaMapMarkerAlt className='text-2xl' /> Enugu, Nigeria  </p>
                <p className='flex items-center gap-3'><span className='w-[7px] h-[7px] rounded-[50%] bg-[#10B981] ' ></span> Available for new projects  </p>
            </span>


            <span className='flex flex-row items-center gap-2 text-2xl ' >
                <a href="https://github.com/chiscookeke11"><FaGithub/> </a>
                <a href="https://x.com/chisco_JS"><FaXTwitter/> </a>
                <a href="https://www.linkedin.com/in/chinedu-okeke-4080b8292/"><FaLinkedin/> </a>
            </span>

        </div>


        <div className={`w-[270px] h-[300px] relative mx-auto lg:mt-0 md:mt-0 mt-12 ${darkMode? "bg-[#374151]" : "bg-[#E5E7EB]" } `} > 
            <img src="https://pbs.twimg.com/profile_images/1871201808833458176/V0e3__w1_400x400.jpg" alt="" className={`w-full h-full absolute top-[-9%] left-[-11%] object-cover border-8 ${darkMode? "border-[#030712]": "bg-white " } `}  />
        </div>




        </div>
  )
}

export default Hero