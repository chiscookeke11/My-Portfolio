import { Link } from "react-router-dom";
import { navbar_data } from "../../data/navbar_data";
import { useEffect, useState } from "react";
import { BiMenu } from "react-icons/bi";
import { IoClose } from "react-icons/io5";



export default function Navbar() {

    const [isScrolled, setIsScrolled] = useState(false)
    const [showMobileMenu, setShowMobileMenu] = useState(false)




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




    // stop page scroll when mobile menu is open
    useEffect(() => {
        const originalOverflow = document.body.style.overflowY;

        document.body.style.overflowY = showMobileMenu ? "hidden" : "auto";

        return () => {
            document.body.style.overflowY = originalOverflow;
        };
    }, [showMobileMenu]);




    return (
        <nav className={`w-full fixed py-4 px-[3%] flex items-center justify-between mb-4 z-20
            font-open-sans relative
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



            <button
                onClick={() => setShowMobileMenu((prev) => !prev)}
                className="block md:hidden text-white opacity-[60%] " >
                <BiMenu size={25} />
            </button>





            {/* Mobile menu  */}
            <div className={`w-full fixed top-0 left-0 h-screen border-b border-white/15 bg-white/2 backdrop-blur-3xl
            flex flex-col items-start justify-start gap-10 py-10 px-5 duration-200 ease-in-out
${showMobileMenu ? "translate-y-0" : "translate-y-[-200%]"}
                `} >



                <button
                    onClick={() => setShowMobileMenu((prev) => !prev)}
                    className="ml-auto block md:hidden text-white opacity-[60%] " >
                    <IoClose size={25} />
                </button>


                {navbar_data.map((d, i) => (
                    <a
                        onClick={() => setShowMobileMenu(false)}
                        href={d.path}
                        key={i}
                        className="text-white  hover:opacity-100 text-[25px] font-medium duration-200 ease-in-out transition-all " >
                        {d.label}
                    </a>
                ))}


            </div>
        </nav>
    )
}