import React from 'react'
import { FaCopy, FaEnvelope, FaGithub, FaLinkedin, FaPhone } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

const Footer = () => {
  return (
    <div className='bg-[#030712] w-full py-24 lg:px-20 px-[5%] flex flex-col items-center justify-center gap-5 text-white ' >
    <div className='flex items-center justify-center flex-col gap-2 text-center' >
    <h1 className='bg-[#374151] px-5 py-1 rounded-xl font-[500] text-sm text-[#D1D5DB] w-fit ' >Get in touch</h1>
    <p className='text-lg  mb-[6%] mt-[2%]  max-w-[500px] ' >What’s next? Feel free to reach out to me if you're looking for a developer, have a query, or simply want to connect.</p>
    <h1 className='flex w-full items-center justify-center gap-5 text-center font-bold text-2xl '>
        <FaEnvelope className='text-lg cursor-pointer' />
       <a href="#">chiscookeke11@gmail.com</a>
       <FaCopy className='text-lg cursor-pointer'/>
    </h1>

    <h1 className='flex w-full items-center justify-center gap-5 text-center font-bold text-2xl '>
        <FaPhone className='text-lg cursor-pointer' />
       <a href="#">09036531295</a>
       <FaCopy className='text-lg cursor-pointer'/>
    </h1>

    <p className='text-sm  mt-[6%]  max-w-[450px] ' >You may also find me on these platforms! </p>
    <span className=' flex flex-row items-center justify-center gap-3' >
        <a href="#"><FaGithub/></a>
        <a href="#"><FaXTwitter/></a>
        <a href="#"><FaLinkedin/></a>
    </span>
    </div>

    </div>
  )
}

export default Footer