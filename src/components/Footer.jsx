import React, { useEffect } from 'react'
import { FaCopy, FaEnvelope, FaGithub, FaLinkedin, FaPhone } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Footer = ({ darkMode }) => {
 
 useEffect(()=> {
        AOS.init({once: true});
    }, [darkMode]);


  const emailUsername = "chiscookeke11@gmail.com"
  const phoneNumber = "09036531295"

  const handleEmailCopy = () => {
    navigator.clipboard
      .writeText(emailUsername)
      .then(() => {
        alert("Email copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy email: ", err);
        alert("Failed to copy email. Please try again.");
      });
  };
  const handlePhoneCopy = () => {
    navigator.clipboard
      .writeText(phoneNumber)
      .then(() => {
        alert("Phone Number copied to clipboard")
      })
      .catch((err) => {
        console.error("failed to copy phone number: ", err);
        alert("failed to copy phone number. please try again")
      })
  }









  return (
    <div
      data-aos="fade-in"
      data-aos-delay="50"
      data-aos-duration="500"
      data-aos-easing="ease-in-out"
      data-aos-once="true"
      id='contact' className={` w-full py-24 lg:px-20 px-6 flex flex-col items-center justify-center gap-5  ${darkMode ? "bg-[#030712] text-white" : "bg-[#FFFFFF] text-[#4B5563] "} `} >
      <div className='flex items-center justify-center flex-col gap-2 text-center' >
        <h1 className={` px-5 py-1 rounded-xl font-[500] text-sm  w-fit ${darkMode ? "bg-[#374151] text-[#D1D5DB]" : "bg-[#E5E7EB] text-[#4B5563] "} `} >Get in touch</h1>
        <p className='text-lg  mb-[6%] mt-[2%]  max-w-[500px] ' >What’s next? Feel free to reach out to me if you're looking for a developer, have a query, or simply want to connect.</p>
        <h1 className={`flex w-full items-center justify-center gap-5 text-center font-bold text-2xl ${darkMode ? "null" : "text-[#111827] "} `} >
          <FaEnvelope className='text-lg cursor-pointer' />
          <a href='https://mail.google.com/mail/?view=cm&fs=1&to=chiscookeke11@gmail.com' target='_blank' >chiscookeke11@gmail.com</a>
          <FaCopy className='text-lg cursor-pointer' onClick={handleEmailCopy} />
        </h1>

        <h1 className={`flex w-full items-center justify-center gap-5 text-center font-bold text-2xl ${darkMode ? "null" : "text-[#111827] "} `} >
          <FaPhone className='text-lg cursor-pointer' />
          <a href="https://wa.me/2349036531295?text=Hello,%20I%20need%20a%20website." target="_blank" rel="noopener noreferrer">  +234 903 653 1295</a>
          <FaCopy className='text-lg cursor-pointer' onClick={handlePhoneCopy} />
        </h1>

        <p className='text-sm  mt-[6%]  max-w-[450px] ' >You may also find me on these platforms! </p>
        <span className=' flex flex-row items-center justify-center gap-3' >
          <a href="https://github.com/chiscookeke11"><FaGithub /></a>
          <a href="https://x.com/chisco_JS"><FaXTwitter /></a>
          <a href="https://www.linkedin.com/in/chinedu-okeke-4080b8292/"><FaLinkedin /></a>
        </span>
      </div>

    </div>
  )
}

export default Footer