import { Link } from "react-router-dom"
import { project_data } from "../../data/projects_data.ts"
import ProjectCard from "./ProjectCard.tsx"


export default function Projects() {
    return (
        <section
            id="projects"
            className="w-full max-w-[918px] h-fit flex flex-col gap-7 md:gap-10  mx-auto  pt-30 md:pt-48 pb-10 md:pb-20 px-2 " >

            <h2 className=" font-times text-3xl md:text-4xl tracking-wide " >Projects</h2>

            <div className="w-full  h-fit hidden md:grid grid-cols-1 md:grid-cols-3 place-items-center justify-items-center gap-2   ">
                {
                    project_data.slice(0, 6).map((project, i) => (
                        <ProjectCard project={project} />
                    ))
                }
            </div>



            {/* projects belt */}
            <section className="w-full flex md:hidden items-center justify-center  " >

                <div className="w-full flex overflow-x-auto scrollbar-hide gap-3 md:gap-1.5 py-4  " >
                    {
                        project_data.slice(0, 6).map((project, i) => (
                            <ProjectCard project={project} />
                        ))
                    }
                </div>

            </section>



            <div className="w-full flex md:items-center flex-col md:flex-row justify-between gap-10 " >
                <p className=" text-sm md:text-lg font-medium  " >
                    {project_data.length}+ projects. 5+ sectors.
                </p>

                <Link
                    to={"/projects"}
                    className="w-fit ml-auto px-4 py-3 bg-white text-black text-sm font-semibold tracking-wide rounded-md cursor-pointer "
                >
                    View all projects
                </Link>
            </div>

        </section>
    )
}