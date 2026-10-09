import { experience_data } from "../../data/experience_data";
import ExperienceCard from "./ExperienceCard";



export default function Experience() {
    return (
        <section className="w-full max-w-[918px] h-fit flex flex-col gap-10  mx-auto  pt-48 pb-20 px-1 ">

            <h2 className=" font-times text-4xl tracking-wide " >Experience</h2>

            <div className=" w-full  h-fit grid grid-cols-4 place-items-center justify-items-center gap-2   ">

                {
                    experience_data.map((exp, i) => (
                        <ExperienceCard key={i} data={exp} />
                    ))
                }

            </div>

        </section>
    )
}