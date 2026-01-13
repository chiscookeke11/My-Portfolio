import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutMe = ({ darkMode }) => {
  useEffect(() => {
    AOS.init({ once: true });
  }, [darkMode]);

  return (
    <div
      data-aos="fade-in"
      data-aos-delay="50"
      data-aos-duration="500"
      data-aos-once="true"
      data-aos-easing="ease-in-out"
      className={`py-24 lg:px-20 px-[5%] flex flex-col items-center justify-center gap-5 ${
        darkMode ? "bg-[#111827] text-white " : "bg-[#F9FAFB] text-[#111827] "
      } `}
    >
      <h1
        className={`px-5 py-1 rounded-xl font-[500] text-sm ${
          darkMode ? "bg-[#374151] " : "text-[#4B5563] bg-[#E5E7EB] "
        } `}
      >
        About me
      </h1>

      <div className="mt-[10%] lg:mt-[6%] flex flex-row items-start justify-between w-full flex-wrap gap-5">
        <div
          className={`lg:w-[300px] lg:h-[380px] w-[250px] h-[300px]  relative  mx-auto  ${
            darkMode ? "bg-[#374151]" : "bg-[#E5E7EB] "
          }`}
        >
          <img
            src="/_BIG6925.jpg"
            alt=""
            className={`w-full h-full absolute top-[-7%] right-[-10%]  object-cover border-8   ${
              darkMode ? "border-[#111827]" : "border-[#E5E7EB]"
            }`}
          />
        </div>

        <div className="max-w-[580px] min-w-sm mx-auto" id="about">
          <h1 className="text-3xl font-semibold mb-2 text-center lg:text-left md:text-left">
            Curious about me? Here you have it:
          </h1>
          <p
            className={`flex flex-col items-start gap-4 text-base md:text-lg ${
              darkMode ? "text-[#D1D5DB]" : "text-[#4B5563]"
            }`}
          >
            <span>
              I’m a Software Engineer with a background in chemistry, focused on
              building scalable web and Web3 applications using modern
              technologies.
            </span>

            <span>
              I work with React.js, Next.js, TypeScript, and Tailwind CSS,
              alongside API and smart contract integrations across blockchain
              networks.
            </span>

            <span>
              I enjoy solving complex problems, designing reusable systems, and
              delivering performant, user-focused software.
            </span>

            <span>
              Through hackathons, bootcamps, team projects and open-source contributions, I collaborate
              closely with others to turn ideas into production-ready solutions.
            </span>

            <span>
              Passionate about impactful technology, I continuously learn,
              contribute, and build software that solves real-world problems.
            </span>

            <span>
              Let’s build something meaningful together. Reach out via X or
              email 😉
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
