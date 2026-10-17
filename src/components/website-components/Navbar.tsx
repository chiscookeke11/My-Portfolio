import { Link } from "react-router-dom";
import { navbar_data } from "../../data/navbar_data";
import { useEffect, useState } from "react";



export default function Navbar() {

    const [isScrolled, setIsScrolled] = useState(false)




    // This handles the scroll observer
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 100)
        }

        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])


    return (
        <nav className={`w-full fixed py-4 px-[3%] flex items-center justify-between mb-4 z-20
            font-open-sans
             duration-100 ease-in-out border-white/15
${isScrolled ? "border-b border-white/15 bg-white/2 backdrop-blur-3xl " : ""}
        `}  >

            <a href={"/"}  >
                Okeke Chinedu
            </a>




            <div className="w-fit hidden md:flex items-center gap-6 "  >
                {navbar_data.map((d, i) => (
                    <a
                        href={d.path}
                        key={i}
                        className="text-white opacity-[60%] hover:opacity-100 text-[15px] font-medium duration-200 ease-in-out transition-all " >
                        {d.label}
                    </a>
                ))}
            </div>
        </nav>
    )
}