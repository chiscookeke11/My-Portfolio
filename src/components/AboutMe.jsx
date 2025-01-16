import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutMe = ({darkMode}) => {
 useEffect(()=> {
        AOS.init({once: true});
    }, [darkMode]);

  return (
    <div
    data-aos="fade-in"
    data-aos-delay="50"
    data-aos-duration="500"
    data-aos-once="true"
    data-aos-easing="ease-in-out" 
     className={`py-24 lg:px-20 px-[5%] flex flex-col items-center justify-center gap-5 ${darkMode? "bg-[#111827] text-white ": "bg-[#F9FAFB] text-[#111827] " } `} >
        <h1 className={`px-5 py-1 rounded-xl font-[500] text-sm ${darkMode? "bg-[#374151] " : "text-[#4B5563] bg-[#E5E7EB] " } `} >About me</h1>

        <div className='mt-[10%] lg:mt-[6%] flex flex-row items-start justify-between w-full flex-wrap gap-5' >

            <div className={`lg:w-[300px] lg:h-[380px] w-[250px] h-[300px]  relative  mx-auto  ${darkMode? "bg-[#374151]" : "bg-[#E5E7EB] " }`} >
                <img src="https://res.cloudinary.com/dwedz2laa/image/upload/v1735993397/IMG-20241129-WA0062_ukfysn.jpg" alt="" className={`w-full h-full absolute top-[-7%] right-[-10%]  object-cover border-8   ${darkMode? "border-[#111827]" : "border-[#E5E7EB]" }`}  />
            </div>







            <div className='max-w-[580px] min-w-sm mx-auto ' id='about' >
                <h1 className='text-3xl font-semibold mb-2 text-center lg:text-left md:text-left  ' >Curious about me? Here you have it:</h1>
                <p className={`flex flex-col items-start text-justify gap-4  text-base ${darkMode? "text-[#D1D5DB]" : "text-[#4B5563] " } `} >

                <span>I'm a frontend developer with a strong foundation in web development and a unique background in chemistry education. Transitioning to tech in 2022, I discovered a passion for building fast, accessible, and dynamic web applications using modern tools like React.js, Next.js, TypeScript, and Tailwind CSS.</span>

<span>My ability to approach problems analytically, shaped by my chemistry background, allows me to design and implement efficient solutions for complex challenges. While I specialize in creating responsive, user-friendly interfaces, I am expanding my expertise into full-stack development and blockchain technology, particularly through Cairo on StarkNet.</span>

<span>My portfolio showcases diverse projects, including real estate platforms, BTCfi games, startup fundraising solutions, and e-commerce applications. A notable highlight is contributing to my team's success in winning the SUI on Campus hackathon bounty. Currently, I am collaborating with an ambitious team to build a blockchain-powered startup.</span>

<span>Beyond development, I actively engage with the tech community, sharing insights on X (formerly Twitter) and contributing to open-source projects on OnlyDust. I'm particularly passionate about leveraging technology to create meaningful digital experiences and am constantly exploring the latest trends in web and blockchain development.</span>

<span>Driven by a commitment to continuous learning, I strive to stay at the forefront of emerging technologies and contribute to innovative projects. Whether building scalable web solutions or mentoring fellow developers, I am dedicated to delivering impactful results and fostering growth in the tech ecosystem.</span>



                   <span>Let's build something amazing together! Feel free to reach out via X or email. 😉</span>
                   
        




                </p>
            </div>
        </div>
        </div>
  )
}

export default AboutMe