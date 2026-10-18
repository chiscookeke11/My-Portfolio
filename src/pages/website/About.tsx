import CountUp from "../../components/ui/CountUp";
import { project_data } from "../../data/projects_data"


export default function About() {


    const startYear = 2023;
    const currentYear = new Date().getFullYear();
    const yearsBuildingSoftware = currentYear - startYear;

    const industrySectors = new Set(
        project_data.map((project) => project.sector).filter(Boolean)
    ).size;


    return (
        <div className="w-full px-[2%] flex flex-col items-center py-20  "  >


            <section className="w-full max-w-3xl  flex flex-col items-start gap-16 " >
                <div className=" w-full flex flex-col items-start gap-3  "  >

                    {/* About me */}
                    <h1 className="font-bold text-2xl md:text-3xl tracking-wide mb-2 ">About</h1>
                    <p className="text-white opacity-[60%] text-sm md:text-base  ">
                        I’m Okeke Chinedu Emmanuel, a Software Engineer and AI/ML Engineer based in Nsukka, Enugu State, Nigeria.
                        I build software, explore artificial intelligence, lead teams, and teach what I learn.
                        My work sits at the intersection of software engineering,
                        emerging technologies, and building solutions that solve real problems.</p>


                    <p className="text-white opacity-[60%] text-sm md:text-base ">
                        My journey into technology began while studying Chemistry Education at the University of Nigeria, Nsukka.
                        What started as an interest in software development gradually grew into a commitment to engineering useful products,
                        understanding the systems behind them, and exploring how technology can create meaningful impact.
                        Since then, I’ve contributed to projects across fintech, Web3, tourism, AI, and developer-focused initiatives.
                    </p>


                    <div className=" w-full grid grid-cols-2 place-items-center justify-items-center gap-4 my-10 "  >

                        <div className=" w-full h-full flex flex-col items-start "  >
                            <h3 className="font-bold text-3xl md:text-5xl tracking-wide mb-2 font-times" >   <CountUp end={project_data.length} /></h3>
                            <h4 className="text-white opacity-[60%] text-xs md:text-sm  ">Projects & Products</h4>
                        </div>

                        <div className=" w-full h-full flex flex-col items-start  "  >
                            <h3 className="font-bold text-3xl md:text-5xl tracking-wide mb-2 font-times ">  <CountUp end={5} /></h3>
                            <h4 className="text-white opacity-[60%] text-xs md:text-sm  ">Industry Sectors</h4>
                        </div>


                        <div className=" w-full h-full flex flex-col items-start  "  >
                            <h3 className="font-bold text-3xl md:text-5xl tracking-wide mb-2 font-times">  <CountUp end={3} /></h3>
                            <h4 className="text-white opacity-[60%] text-xs md:text-sm  ">Technical Disciplines</h4>
                        </div>


                        <div className=" w-full h-full flex flex-col items-start  "  >
                            <h3 className="font-bold text-3xl md:text-5xl tracking-wide mb-2 font-times ">  <CountUp end={yearsBuildingSoftware} /></h3>
                            <h4 className="text-white opacity-[60%] text-xs md:text-sm  ">Years Building Software</h4>
                        </div>


                    </div>

                </div>


                {/* Engineering and building */}
                <div className=" w-full flex flex-col items-start gap-3  "  >
                    <h1 className="font-bold text-2xl md:text-3xl tracking-wide mb-2 ">Engineering and Building</h1>
                    <p className="text-white opacity-[60%] text-sm md:text-base  ">
                        I work across the software development stack, building responsive user interfaces,
                        backend services, APIs, and data-driven applications.
                        My toolkit includes JavaScript, TypeScript, Python, React, Next.js,
                        Node.js, Express, SQL, PostgreSQL, MongoDB, and other tools that help
                        me turn ideas into functional, maintainable software.</p>


                    <p className="text-white opacity-[60%] text-sm md:text-base  ">
                        My experience spans full-stack development, frontend architecture, API integration,
                        authentication, database design, and blockchain application integration.
                        I care about more than making software work, I care about making it reliable,
                        maintainable, accessible, and intuitive for the people who use it.
                    </p>


                    <p className="text-white opacity-[60%] text-sm md:text-base  ">
                        From contributing to tourism platforms and community websites
                        to working on fintech and AI-powered products,
                        I enjoy collaborating with teams to take ideas
                        from concept to implementation.
                    </p>

                </div>



                {/* Leadership and Collaboration */}
                <div className=" w-full flex flex-col items-start gap-3  "  >
                    <h1 className="font-bold text-2xl md:text-3xl tracking-wide mb-2 ">Leadership and Collaboration</h1>
                    <p className="text-white opacity-[60%] text-sm md:text-base ">
                        Beyond writing code, I’ve taken on leadership responsibilities across engineering teams,
                        development projects, community initiatives, and execution-driven programs.
                        I’ve led engineering efforts, coordinated with collaborators,
                        helped translate ideas into actionable plans, and worked to move projects from planning to delivery.</p>


                    <p className="text-white opacity-[60%] text-sm md:text-base  ">
                        My leadership experience also extends to executing ecosystem programs,
                        contributing to open-source communities, and supporting initiatives that help
                        people learn and engage with technology. Through these roles,
                        I’ve developed a stronger appreciation for communication,
                        accountability, teamwork, and the importance of
                        aligning technical decisions with shared goals.
                    </p>


                    <p className="text-white opacity-[60%] text-sm md:text-base  ">
                        I believe leadership is not simply about holding a title or directing a team.
                        It is about creating clarity,
                        taking responsibility, helping others grow,
                        and making consistent progress toward a common vision.
                    </p>




                    <div className="my-4 relative  w-full h-fit py-10  flex items-center justify-center gap-1 " >


                        <div className=" size-30 md:size-70 bg-gray-400 flex items-center justify-center rounded-sm overflow-hidden scale-90 rotate-[2deg]  " >
                            <img
                                src="./leadership_and_collaboration_images/image4.jpg"
                                className="object-center object-cover h-full w-full "
                                alt="" />

                        </div>


                        <div className=" size-30 md:size-70 bg-gray-400 flex items-center justify-center rounded-sm overflow-hidden  scale-120  z-10" >
                            <img
                                src="./leadership_and_collaboration_images/DEP1 Certificate - Connect DAO.png"
                                className="object-center object-cover h-full w-full "
                                alt="" />

                        </div>


                        <div className=" size-30 md:size-70 bg-gray-400 flex items-center justify-center rounded-sm overflow-hidden scale-90 rotate-[-2deg] " >
                            <img
                                src="./leadership_and_collaboration_images/image5.jpg"
                                className="object-center object-cover h-full w-full "
                                alt="" />

                        </div>


                    </div>

                </div>




                {/* AI, Machine Learning, and Teaching */}
                <div className=" w-full flex flex-col items-start gap-3  "  >
                    <h1 className="font-bold text-2xl md:text-3xl tracking-wide mb-2 ">AI, Machine Learning, and Teaching</h1>
                    <p className="text-white opacity-[60%] text-sm md:text-base  ">


                        My interests extend beyond conventional software engineering into artificial intelligence and machine learning.
                        I’m exploring how intelligent systems can support decision-making,
                        automate repetitive tasks, improve user experiences,
                        and solve problems across different industries.</p>


                    <p className="text-white opacity-[60%] text-sm md:text-base  ">
                        I’m particularly interested in AI-powered applications, natural language processing,
                        intelligent agents, and the engineering practices required to build useful AI systems.
                        I enjoy connecting my software engineering background with machine learning to develop
                        solutions that are both technically sound and practical.
                    </p>


                    <p className="text-white opacity-[60%] text-sm md:text-base  ">
                        Teaching is another important part of my journey.
                        I’ve supported learners through software development and AI/ML instruction,
                        breaking down complex concepts into practical, approachable lessons.
                        Sharing knowledge helps me strengthen
                        my own understanding while contributing to the growth of the next generation of developers.
                    </p>


                    <div className="my-4 relative  w-full h-fit py-10  flex items-center justify-center gap-1 " >


                        <div className=" size-30 md:size-70 bg-gray-400 flex items-center justify-center rounded-sm overflow-hidden scale-90 rotate-[2deg]  " >
                            <img
                                src="/ml_teaching_images/image2.jpeg"
                                className="object-center object-cover h-full w-full "
                                alt="" />

                        </div>


                        <div className=" size-30 md:size-70 bg-gray-400 flex items-center justify-center rounded-sm overflow-hidden  scale-120  z-10" >
                            <img
                                src="/ml_teaching_images/image3.jpeg"
                                className="object-center object-cover h-full w-full "
                                alt="" />

                        </div>


                        <div className=" size-30 md:size-70 bg-gray-400 flex items-center justify-center rounded-sm overflow-hidden scale-90 rotate-[-2deg] " >
                            <img
                                src="/ml_teaching_images/image1.jpeg"
                                className="object-center object-cover h-full w-full "
                                alt="" />

                        </div>


                    </div>
                </div>



                {/* Beyond the Code*/}
                <div className=" w-full flex flex-col items-start gap-3  "  >
                    <h1 className="font-bold text-2xl md:text-3xl tracking-wide mb-2 ">Beyond the Code</h1>
                    <p className="text-white opacity-[60%] text-sm md:text-base ">

                        I’m interested in open-source software, Web3, smart contracts,
                        developer tools, technology entrepreneurship,
                        and the broader relationship between science and engineering.
                        My background in chemistry continues to influence my curiosity about scientific
                        innovation and the potential for technology to address complex challenges.</p>


                    <p className="text-white opacity-[60%] text-sm md:text-base ">
                        Outside work, I enjoy playing badminton, exploring new ideas,
                        learning from other builders, and engaging with
                        communities that encourage collaboration and continuous growth.
                    </p>
                </div>



                {/* What I’m Focused on Now */}
                <div className=" w-full flex flex-col items-start gap-3  "  >
                    <h1 className="font-bold text-2xl md:text-3xl tracking-wide mb-2 ">What I’m Focused on Now</h1>
                    <p className="text-white opacity-[60%] text-sm md:text-base ">
                        I’m continuing to grow at the intersection of software engineering,
                        AI/ML, and technical leadership, building useful products,
                        developing intelligent systems, contributing to meaningful initiatives,
                        and helping teams execute ideas effectively.
                    </p>


                    <p className="text-white opacity-[60%] text-sm md:text-base  ">
                        I’m interested in opportunities where I can contribute as an engineer,
                        collaborate with ambitious teams,
                        take ownership of challenging problems, and keep learning along the way.
                    </p>

                    <p className="text-white opacity-[60%] text-sm md:text-base  ">
                        Ultimately, I want to build technology that is useful,
                        thoughtfully engineered, and capable of making a lasting difference.
                    </p>
                </div>




                {/* Connect with me */}
                <div className=" w-full flex flex-col items-start gap-1  "  >
                    <h1 className="font-bold text-lg md:text-2xl tracking-wide mb-2 ">Connect with me</h1>
                    <p className="text-white opacity-[60%] text-sm  ">
                        LinkedIn: {" "}
                        <a href="https://www.linkedin.com/in/chinedu-emmanuel-okeke-4080b8292/"
                            target="_blank"
                        >
                            Chinedu Emmanuel Okeke</a>
                    </p>

                    <p className="text-white opacity-[60%] text-sm  ">
                        GitHub: {" "}
                        <a href="https://github.com/chiscookeke11"
                            target="_blank"
                        >
                            chiscookeke11</a>
                    </p>

                </div>




            </section>

        </div>
    )
}