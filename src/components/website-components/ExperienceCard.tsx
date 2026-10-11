import { Experience } from "../../types/types"



interface ExperienceCardProps {
    data: Experience
}



export default function ExperienceCard({ data }: ExperienceCardProps) {
    return (
        <div
            title={`${data.title} at ${data.company_name}`}
            className=" w-full h-full bg-[#0c0c0c] flex flex-col items-center justify-between gap-4 rounded-xl py-5 px-3 cursor-pointer "   >
            <img
                src={data.logo}
                alt={`${data.company_name} logo`}
                className="object-center object-contain mx-auto my-auto max-w-25 h-auto max-h-15  "
            />


            <div className="w-full flex flex-col items-start justify-between text-xs gap-2 " >
                <h5 className="font-medium  " > {data.company_name} </h5>
                <h5 className="" > {data.title} </h5>
                <h5 className=" ml-auto mt-2 text-[10px] " > {data.duration} </h5>
            </div>
        </div>
    )

}