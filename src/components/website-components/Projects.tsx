import { Link } from "react-router-dom"
import { project_data } from "../../data/projects_data.ts"
import ProjectCard from "./ProjectCard.tsx"


export default function Projects() {
    return (
        <section
            id="projects"
            className="w-full max-w-[918px] h-fit flex flex-col gap-10  mx-auto  pt-48 pb-20 px-1 " >

            <h2 className=" font-times text-4xl tracking-wide " >Projects</h2>

            <div className="w-full  h-fit grid grid-cols-3 place-items-center justify-items-center gap-2   ">
                {
                    project_data.slice(0, 6).map((project, i) => (
                        <ProjectCard project={project} />
                    ))
                }
            </div>



            <div className="w-full flex items-center justify-between gap-10 " >
                <p className=" text-sm md:text-lg font-medium  " >
                    {project_data.length}+ projects. 5+ sectors.
                </p>

                <Link
                    to={"/projects"}
                    className="px-4 py-3 bg-white text-black text-sm font-semibold tracking-wide rounded-md cursor-pointer "
                >
                    View all projects
                </Link>
            </div>

        </section>
    )
}