
import ProjectCard from "../../components/website-components/ProjectCard";
import { project_data } from "../../data/projects_data";
import React, { useState } from "react";
import ProjectHoverPreview from "../../components/website-components/ProjectHoverPreview";
import { Link, useNavigate } from "react-router-dom";



export default function Projects() {
    const [hoveredProject, setHoveredProject] = useState<(typeof project_data)[number] | null>(null)
    const navigate = useNavigate();

    const [pointer, setPointer] = useState({
        x: 0,
        y: 0
    })


    const handleMouseMove = (
        event: React.MouseEvent<HTMLTableRowElement>,
        project: (typeof project_data)[number]
    ) => {
        setHoveredProject(project)

        setPointer({
            x: event.clientX,
            y: event.clientY
        })
    }



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
                        project_data.slice(6).map((project, i) => (
                            <ProjectCard project={project} />
                        ))
                    }
                </div>

            </section>


            <section className="w-full my-24 md:my-48 overflow-x-auto  "  >

                <table className="w-full md:min-w-[850px] border-collapse text-left text-xs md:text-sm">
                    <thead>
                        <tr className="border-b border-[#292929] text-[#777777]">
                            <th className="px-0 py-4 font-normal">Role</th>
                            <th className="px-4 py-4 font-normal">Project</th>
                            <th className="px-4 py-4 font-normal">Sector</th>
                            <th className="px-4 py-4 font-normal">Technology</th>
                            <th className="px-4 py-4 font-normal">Team</th>
                            <th className="px-4 py-4 font-normal"></th>
                        </tr>
                    </thead>

                    <tbody>
                        {project_data.map((item, index) => (
                            <tr
                                onClick={() => navigate(`/projects/${item.id}`)}
                                key={item.id ?? index}
                                onMouseEnter={() => setHoveredProject(item)}
                                onMouseMove={(event) =>
                                    handleMouseMove(event, item)
                                }
                                onMouseLeave={() => setHoveredProject(null)}
                                className="border-b border-[#292929] cursor-pointer transition-colors duration-200 hover:bg-[#111111]"
                            >
                                <td className="whitespace-nowrap py-3.5 pr-4 font-medium">
                                    {item.role}
                                </td>
                                <td className="whitespace-nowrap px-4 py-3.5 font-medium">
                                    {item.title}
                                </td>
                                <td className="whitespace-nowrap px-4 py-3.5 font-medium">
                                    {item.sector.map((s) => (
                                        s
                                    )).join(", ")}
                                </td>
                                <td className="whitespace-nowrap px-4 py-3.5 font-medium">
                                    {item.technology.map((t) => (
                                        t
                                    )).join(", ")}
                                </td>
                                <td className="whitespace-nowrap px-4 py-3.5 font-medium">
                                    {item.Team}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {hoveredProject && (
                    <ProjectHoverPreview
                        project={hoveredProject}
                        style={{
                            left: Math.min(
                                pointer.x + 24,
                                window.innerWidth - 300
                            ),
                            top: Math.max(
                                12,
                                Math.min(
                                    pointer.y - 90,
                                    window.innerHeight - 220
                                )
                            ),
                        }}
                    />
                )}

            </section>


            <section className=" w-full max-w-3xl text-left font-normal
              tracking-wide flex flex-col items-start gap-5 font-open-sans "
            >
                <h2 className="text-base font-medium text-white ">About</h2>
                <p className="text-white opacity-[60%] text-sm md:text-[15px] ">
                    I’m a Software Engineer and AI/ML Engineer building software solutions
                    and exploring the possibilities of artificial intelligence.
                    My journey spans web development, open-source contributions, and teaching,
                    with a growing focus on machine learning and intelligent systems.
                    I enjoy turning ideas into practical products and sharing what I learn along the way.
                </p>
                <Link
                    to={"/about"}
                    className="w-fit  px-3 py-3 bg-white text-black text-sm font-medium tracking-wide rounded-md cursor-pointer "
                >
                    More   about me
                </Link>
            </section>

        </div>
    )
}