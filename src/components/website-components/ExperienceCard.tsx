import { Experience } from "../../types/types"



interface ExperienceCardProps {
    data: Experience
}



export default function ExperienceCard({ data }: ExperienceCardProps) {
    return (
        <div
            title={`${data.title} at ${data.company_name}`}
            className=" w-full aspect-square bg-[#0c0c0c] flex flex-col items-center justify-between rounded-xl py-5 px-3 cursor-pointer "   >
            hello


            <div className="w-full flex flex-col items-start justify-between text-xs gap-2 " >
                <h5> {data.title} </h5>

                <h5 className="" > {data.duration} </h5>
            </div>
        </div>
    )

}