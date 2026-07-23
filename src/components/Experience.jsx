import { useEffect } from "react";
import { experience } from "../assets/assets";
import AOS from "aos";
import "aos/dist/aos.css";

const Experience = ({ darkMode }) => {
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
      className={` w-full py-24 lg:px-20 px-[5%] flex flex-col items-center justify-center gap-5 ${darkMode ? "bg-[#111827] text-white " : "bg-[#F9FAFB] text-[#4B5563] "} `}
    >
      <div className="flex items-center justify-center flex-col gap-2 text-center">
        <h1
          className={` px-5 py-1 rounded-xl font-[500] text-sm  w-fit ${darkMode ? "bg-[#374151] text-[#D1D5DB]" : "bg-[#E5E7EB]  "} `}
        >
          Experience
        </h1>
        <p className="text-lg  ">
          Here is a quick summary of my most recent experiences:
        </p>
      </div>

      <div className="jobs w-full grid grid-cols-1 lg:grid-cols-2 gap-5 items-center">
        {experience.map((item, index) => (
          <div
            key={index}
            className={`w-full h-full max-w-[896px] flex flex-col md:flex-row items-start justify-evenly  gap-5 px-4 py-7 overflow-hidden rounded-lg ${darkMode ? "bg-[#1F2937]" : "bg-[#FFFFFF] shadow-xl  "} `}
          >
            <div className=" basis-1/4  ">
              <img src={item.image} alt="" className="w-[100px] " />{" "}
            </div>
            <div className=" basis-2/4 ">
              {" "}
              <h1
                className={`text-lg font-bold mb-2 ${darkMode ? "null " : "text-[#111827] "} `}
              >
                {item.role}{" "}
              </h1>
              <ul className="list-disc pl-4">
                <li
                  className={` font-normal text-sm my-2 ${darkMode ? "text-[#D1D5DB] " : "text-[#4B5563] "} `}
                >
                  {" "}
                  {item.tasks.task1}{" "}
                </li>
                <li
                  className={` font-normal text-sm my-2 ${darkMode ? "text-[#D1D5DB] " : "text-[#4B5563] "} `}
                >
                  {item.tasks.task2}
                </li>
              </ul>
              <div
                className={`basis-1/4 flex md:justify-end  font-normal text-xs ${darkMode ? "text-[#D1D5DB]" : "text-[#374151] "} `}
              >
                {item.duration}{" "}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
