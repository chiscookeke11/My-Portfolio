import React from 'react'

const AboutMe = () => {
  return (
    <div className='bg-[#111827] text-white py-24 lg:px-20 px-[5%] flex flex-col items-center justify-center gap-5 ' >
        <h1 className='bg-[#374151] px-5 py-1 rounded-xl font-[500] text-sm ' >About me</h1>

        <div className='mt-[10%] lg:mt-[6%] flex flex-row items-start justify-between w-full flex-wrap gap-5' >

            <div className='lg:w-[300px] lg:h-[380px] w-[250px] h-[300px]  relative bg-[#374151] mx-auto   ' >
                <img src="https://github.com/chiscookeke11/Test-pagea/blob/main/nedu.jpg?raw=true" alt="" className='w-full h-full absolute top-[-7%] right-[-10%]  object-cover border-8 border-[#111827] '  />
            </div>







            <div className='max-w-[580px] min-w-sm mx-auto '>
                <h1 className='text-3xl font-semibold mb-2 text-center lg:text-left md:text-left  ' >Curious about me? Here you have it:</h1>
                <p className='flex flex-col items-start text-justify gap-4 text-[#D1D5DB] text-base' >

                    <span>I'm a passionate, self-proclaimed designer who specializes in full stack development (React.js & Node.js). I am very enthusiastic about bringing the technical and visual aspects of digital products to life. User experience, pixel perfect design, and writing clear, readable, highly performant code matters to me.</span>

                    <span>I began my journey as a web developer in 2015, and since then, I've continued to grow and evolve as a developer, taking on new challenges and learning the latest technologies along the way. Now, in my early thirties, 7 years after starting my web development journey, I'm building cutting-edge web applications using modern technologies such as Next.js, TypeScript, Nestjs, Tailwindcss, Supabase and much more.</span>

                    <span>I am very much a progressive thinker and enjoy working on products end to end, from ideation all the way to development.</span>

                    <span>When I'm not in full-on developer mode, you can find me hovering around on twitter or on indie hacker, witnessing the journey of early startups or enjoying some free time. You can follow me on Twitter where I share tech-related bites and build in public, or you can follow me on GitHub.</span>

                   
                   
                   <div className='w-full' >
                     <span className='w-full flex flex-wrap justify-between px-3' >
                    <ul className='space-y-2  list-disc ' >
                        <li>B.E. in Computer Engineering</li>
                        <li>B.E. in Computer Engineering</li>
                        </ul>

                        <ul  className='space-y-2 list-disc  '>
                        <li>Avid learner</li>
                        <li>Aspiring indie hacker</li>
                    </ul>
                    </span>
                    </div>

                    <span>One last thing, I'm available for freelance work, so feel free to reach out and say hello! I promise I don't bite 😉</span>




                </p>
            </div>
        </div>
        </div>
  )
}

export default AboutMe