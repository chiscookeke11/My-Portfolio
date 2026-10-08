import { project_data } from "../../data/projects_data.ts"
import ProjectCard from "./ProjectCard.tsx"


export default function Projects() {
    return (
        <section className="w-full mx-auto max-w-[918px]  h-fit grid grid-cols-3 place-items-center justify-items-center gap-2 py-48 px-1  " >



            {
                project_data.slice(0, 6).map((project, i) => (
                    <ProjectCard project={project} />
                ))
            }



        </section>
    )
}