import { Link } from "react-router-dom";
import { navbar_data } from "../../data/navbar_data";



export default function Navbar() {
    return (
        <nav className="w-full py-4 px-[3%] flex items-center justify-between mb-4 "  >

            <Link to={"/"}  >
                Okeke Chinedu
            </Link>




            <div className="w-fit flex items-center gap-6 "  >
                {navbar_data.map((d, i) => (
                    <Link
                        to={d.path}
                        key={i}
                        className="text-white opacity-[60%] hover:opacity-100 text-[15px] font-medium duration-200 ease-in-out transition-all " >
                        {d.label}
                    </Link>
                ))}
            </div>
        </nav>
    )
}