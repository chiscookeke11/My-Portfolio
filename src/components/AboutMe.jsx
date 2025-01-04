import React from 'react'

const AboutMe = ({darkMode}) => {
  return (
    <div className={`py-24 lg:px-20 px-[5%] flex flex-col items-center justify-center gap-5 ${darkMode? "bg-[#111827] text-white ": "bg-[#F9FAFB] text-[#111827] " } `} >
        <h1 className={`px-5 py-1 rounded-xl font-[500] text-sm ${darkMode? "bg-[#374151] " : "text-[#4B5563] bg-[#E5E7EB] " } `} >About me</h1>

        <div className='mt-[10%] lg:mt-[6%] flex flex-row items-start justify-between w-full flex-wrap gap-5' >

            <div className={`lg:w-[300px] lg:h-[380px] w-[250px] h-[300px]  relative  mx-auto  ${darkMode? "bg-[#374151]" : "bg-[#E5E7EB] " }`} >
                <img src="https://res.cloudinary.com/dwedz2laa/image/upload/v1735993397/IMG-20241129-WA0062_ukfysn.jpg" alt="" className={`w-full h-full absolute top-[-7%] right-[-10%]  object-cover border-8   ${darkMode? "border-[#111827]" : "border-[#E5E7EB]" }`}  />
            </div>







            <div className='max-w-[580px] min-w-sm mx-auto ' id='about' >
                <h1 className='text-3xl font-semibold mb-2 text-center lg:text-left md:text-left  ' >Curious about me? Here you have it:</h1>
                <p className={`flex flex-col items-start text-justify gap-4  text-base ${darkMode? "text-[#D1D5DB]" : "text-[#4B5563] " } `} >

                    <span>I'm a frontend developer with a unique background in chemistry education, who discovered a passion for coding in 2022. Since then, I've immersed myself in modern web development, specializing in React.js and building dynamic applications with Next.js, TypeScript, and Tailwind CSS.</span>

                    <span>My journey from chemistry to code has given me a distinctive approach to problem-solving. While I excel in crafting responsive and engaging user interfaces, I'm actively expanding into full-stack development and exploring blockchain technology with Cairo on StarkNet.</span>

                    <span>My portfolio includes diverse projects ranging from real estate platforms and BTCfi gaming to startup fundraising solutions and e-commerce interfaces. I'm particularly proud of contributing in my team to win the SUI on Campus hackathon bounty, and I'm currently building a startup with an ambitious team.</span>

                    <span>When I'm not in full-on developer mode, you can find me hovering around on twitter or on LinkedIn, witnessing the journey of early startups or enjoying some free time. You can follow me on Twitter where I share tech-related bites and build in public, or you can follow me on GitHub.</span>

                  <span>My drive for continuous learning and innovation fuels my dedication to mastering new technologies and delivering impactful solutions. When I'm not coding, you'll find me exploring the latest web technologies or connecting with fellow developers on X.</span>

                   <span>Let's build something amazing together! Feel free to reach out via X or email. 😉</span>
                   
        




                </p>
            </div>
        </div>
        </div>
  )
}

export default AboutMe