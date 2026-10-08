import { Projects } from "../../types/types"



interface ProjectCardProps {
    project: Projects
}

export default function ProjectCard({ project }: ProjectCardProps) {
    return (
        <div className="w-full h-[410px] bg-[#0c0c0c] rounded-xl flex items-center justify-between
                     flex-col overflow-hidden group cursor-pointer
                     "  >
            <div className="w-full h-full flex items-center justify-center px-[10%]  " >

                <div className={`
                                h-[240px] w-[218px]  rounded-xl group-hover:scale-110
                                duration-200 ease-in-out transition-all
                                `} >
                    <video
                        src={project.image}
                        autoPlay
                        loop
                        muted
                        className="w-full h-full   object-contain rounded-[10px] "
                    ></video>
                </div>
            </div>

            <div className=" w-full py-2.5 px-4 flex items-center justify-between gap-10 " >
                <h3> {project.title} </h3>
                <h3>  {project.sector[0]} </h3>
            </div>
        </div>
    )
}