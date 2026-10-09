import ProjectCard from "../../components/website-components/ProjectCard";
import { project_data } from "../../data/projects_data";



export default function Projects() {
    return (
        <div className="pt-48 pb-20 flex items-center flex-col justify-center px-[2%] " >

            <section className=" pt-20 pb-40 max-w-3xl text-center font-semibold text-base md:text-lg tracking-wide  " >
                I’ve built across fintech, blockchain, tourism, AI, and developer tooling,
                turning ideas into production software,
                contributing to open source, and helping developers build what’s next.
            </section>


            {/* projects belt */}
            <section className="w-full flex items-center justify-center  " >

                <div className="w-full flex overflow-x-auto scrollbar-hide gap-1.5 py-4  " >
                    {
                        project_data.slice(6, 12).map((project, i) => (
                            <ProjectCard project={project} />
                        ))
                    }
                </div>

            </section>


        </div>
    )
}