import React, { useEffect } from 'react'
import { FaBars, FaHamburger, FaMoon, FaSun, FaTimes } from 'react-icons/fa'

const Navbar = ({darkMode, toggleMode}) => {




    const[openNav, setOpenNav] = React.useState(false)

    const handleNav = () => {
        setOpenNav(prevNav => !prevNav)
    }

    const closeNav = () => {
        setOpenNav(false)
    }


    useEffect(() => {

        document.body.style.overflowY =  openNav ? "hidden" : "auto"

    }, [openNav])






  return (
    <div className={` w-full flex items-center justify-between py-6 px-10 mb-5 transition duration-300 ease-in-out ${darkMode? "bg-[#030712] text-white": "bg-white text-[#111827] " } ` }  >
        <a href='/' className='font-bold text-3xl  ' >&lt;OC /&gt;</a>





        <ul className={`hidden lg:flex items-center justify-center w-fit flex-row list-none ${darkMode? "text-[#D1D5DB]": "text-[#4B5563]"}  `} >
            <li className={`font-[500] text-base mx-4  transition duration-300 ease-in-out  ${darkMode? "hover:text-white" : "hover:text-[#111827]" } `} ><a href="#about">About </a></li>
            <li className={`font-[500] text-base mx-4  transition duration-300 ease-in-out  ${darkMode? "hover:text-white" : "hover:text-[#111827]" } `}><a href="#work">Work </a></li>
            <li className={`font-[500] text-base mx-4  transition duration-300 ease-in-out  ${darkMode? "hover:text-white" : "hover:text-[#111827]" } `}><a href="#testimonials">Testimonials </a></li>
            <li className={`font-[500] text-base mx-4  transition duration-300 ease-in-out  ${darkMode? "hover:text-white" : "hover:text-[#111827]" } `}><a href="#contact">Contact </a></li>
            {/* <li className={`font-[500] text-base mx-4 ml-9 transition duration-300 ease-in-out cursor-pointer ${darkMode? "hover:text-white" : "hover:text-[#111827]" }`} onClick={toggleMode} > {darkMode? <FaSun/> :  <FaMoon/> } </li> */}
            <a href="../assets/OkekeChinedu-Resume_eoy2gs.pdf" download  className={`font-[500] text-sm mx-4  rounded-2xl px-4 py-3 ${darkMode? "bg-[#F9FAFB] text-[#111827]": " bg-[#111827] text-[#F9FAFB]" } `} >Download Resume</a>
        </ul>



       <button  className='block lg:hidden text-2xl' onClick={handleNav} > <FaBars  /> </button>















       {/* mobile menu  */}



       <div className= {` lg:hidden fixed w-full h-full top-0 left-0 z-50 flex flex-col gap-8 items-start justify-start py-3 transition duration-400 ease-in-out transform ${openNav? "translate-x-0 ": "translate-x-[-100%]" } ${darkMode? "bg-[#030712]" : "bg-white" }`} >
        <div className='flex flex-row justify-between items-center w-full py-3 px-6 ' >
        <h1 className='font-bold text-3xl  ' >&lt;OC /&gt;</h1>

        <FaTimes onClick={closeNav} className='text-2xl' />
        </div>

       <ul className= {`flex flex-col items-start justify-center px-6   list-none border-b border-t border-[#1F2937] w-full py-2 ${darkMode? "text-[#d1d5db]" : "text-[#4B5563]" } `} >
             <li onClick={closeNav}  className= {`font-[500] text-lg my-4 hover:text-white transition duration-300 ease-in-out ${darkMode? "hover:text-white" : "hover:text-[#111827]" }  `}><a href="#about">About </a></li>
            <li onClick={closeNav}  className= {`font-[500] text-lg my-4 hover:text-white transition duration-300 ease-in-out ${darkMode? "hover:text-white" : "hover:text-[#111827]" }  `}><a href="#work">Work </a></li>
            <li onClick={closeNav}  className= {`font-[500] text-lg my-4 hover:text-white transition duration-300 ease-in-out ${darkMode? "hover:text-white" : "hover:text-[#111827]" }  `}><a href="#testimonials">Testimonials </a></li>
            <li onClick={closeNav}  className= {`font-[500] text-lg my-4 hover:text-white transition duration-300 ease-in-out ${darkMode? "hover:text-white" : "hover:text-[#111827]" }  `}><a href="#contact">Contact </a></li>
        </ul>



        <div className='w-full flex flex-col items-start justify-center gap-7 py-2 px-6 ' >
        {/* <div onClick={toggleMode} className={` font-[500] text-lg cursor-pointer  transition duration-300 ease-in-out flex flex-row justify-between w-full ${darkMode? "text-[#D1D5DB] hover:text-white" : "text-[#4B5563] hover:text-[#111827]"  } ` }><p>Switch Theme </p>    <button   > {darkMode? <FaSun/> :  <FaMoon/>}</button></div> */}
        <a onClick={closeNav}
         href="../assets/OkekeChinedu-Resume_eoy2gs.pdf"
         download
         className={`${darkMode? "bg-[#F9FAFB] text-[#111827]" : "bg-[#111827] text-[#D1D5DB]" } text-center  font-[500] text-base  rounded-2xl px-4 py-3 w-full  max-w-[400px]`} >
            Download Resume</a>
        </div>
       </div>




    </div>
  )
}

export default Navbar