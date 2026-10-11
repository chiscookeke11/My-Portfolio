import { Link } from "react-router-dom"
import { Projects } from "../../types/types"



interface ProjectCardProps {
    project: Projects
}

export default function ProjectCard({ project }: ProjectCardProps) {

    return (
        <Link
            to={`/projects/${project.id}`}
            className="w-full min-w-[302px]  max-w-[302px] h-[370px] md:h-[410px] " >

            <div className=" w-full h-full bg-[#0c0c0c] rounded-xl flex items-center justify-between shrink-0
                     flex-col overflow-hidden group cursor-pointer
                     "  >
                <div className="w-full h-full flex items-center justify-center px-[5%] md:px-[10%]  " >

                    <div className={`
                                h-[240px] md:w-[218px]  rounded-xl group-hover:scale-110
                                duration-200 ease-in-out transition-all
                                `} >
                        {project.image.includes("mp4") ? (
                            <video
                                src={project.image}
                                autoPlay
                                loop
                                muted
                                className="w-full h-full   object-cover object-center rounded-[10px] "
                            ></video>
                        ) : (
                            <img
                                src={project.image}
                                alt="image"
                                className="w-full h-full   object-cover object-center rounded-[10px] "
                            />
                        )}
                    </div>
                </div>

                <div className=" w-full py-2.5 px-4 flex items-center justify-between gap-6 md:gap-10 " >
                    <h3 className="text-sm md:text-base " > {project.title} </h3>
                    <h3 className="text-sm md:text-base ">  {project.sector[0]} </h3>
                </div>
            </div>

        </Link>
    )
}