import { useParams } from "react-router-dom"
import { project_data } from "../../data/projects_data"



export default function Project() {

    const { id } = useParams()

    const project = project_data.find((item) => item.id === id)


    if (!project) {
        return (
            <h1>Project not found</h1>
        )
    }





    return (
        <div className="text-white flex flex-col items-center px-2 gap-20 pt-24 " >


            {/* Header */}
            <header className="w-full max-w-5xl flex flex-col items-start gap-5 " >
                <h1 className="font-bold text-3xl md:text-5xl " > {project.title}</h1>
                <p className="text-white opacity-[60%] text-base md:text-[17px] " > {project.briefDescription} </p>
                <a target="_blank" href={project.url} className="text-blue-600 text-sm font-medium " >Preview</a>

            </header>


            {/* Video  */}
            <div className="w-full max-w-[1400px] h-auto my-10 bg-[#0c0c0c] " >
                {project.image.includes("mp4") ? (
                    <video
                        src={project.image}
                        autoPlay
                        loop
                        muted
                        className="w-full h-full    object-cover object-center rounded-[10px] "
                    ></video>
                ) : (
                    <img
                        src={project.image}
                        alt="image"
                        className="w-full h-full    object-cover object-center rounded-[10px] "
                    />
                )}
            </div>





            {/* Project details */}
            <div className="w-full max-w-5xl  flex flex-col-reverse md:flex-row items-start justify-between gap-16 md:gap-20 " >


                <div className=" basis-[30%] flex flex-col items-start gap-7 " >

                    <div className="space-y-1" >
                        <h4 className="text-base font-medium ">Role</h4>
                        <h5 className="text-white opacity-[60%] text-[15px] ">{project.role}</h5>
                    </div>

                    <div className="space-y-1">
                        <h4 className="text-base font-medium ">Scope</h4>
                        <h5 className="text-white opacity-[60%] text-[15px] ">{project.scope}</h5>
                    </div>

                    <div className="space-y-1">
                        <h4 className="text-base font-medium ">Technology</h4>
                        <h5 className="text-white opacity-[60%] text-[15px] ">{project.technology.map((t) => (
                            t
                        )).join(", ")}</h5>
                    </div>


                    <div className="space-y-1">
                        <h4 className="text-base font-medium ">Team</h4>
                        <h5 className="text-white opacity-[60%] text-[15px] ">{project.Team}</h5>
                    </div>

                </div>


                <div className=" basis-[70%] " >
                    <p className="text-white opacity-[60%] text-base whitespace-pre-line ">
                        {project.caseStudy}
                    </p>
                </div>

            </div>



            {/* Impact  */}
            <div className="w-full max-w-5xl  flex items-start flex-col md:flex-row justify-between gap-16 md:gap-20 border-t border-b py-7 border-white/25 " >


                <div className=" basis-[30%] flex flex-col items-start gap-7 " >

                    <div className="space-y-1" >
                        <h4 className="text-base font-medium ">Impact</h4>
                    </div>

                </div>


                <div className=" basis-[70%] " >
                    <p className="text-white opacity-[60%] text-base whitespace-pre-line ">
                        {project.impact}
                    </p>
                </div>

            </div>

        </div >
    )
}