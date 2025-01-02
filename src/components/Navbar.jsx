import React from 'react'
import { FaBars, FaHamburger, FaMoon, FaTimes } from 'react-icons/fa'

const Navbar = () => {


    const[openNav, setOpenNav] = React.useState(false)

    const handleNav = () => {
        setOpenNav(prevNav => !prevNav)
    }

    const closeNav = () => {
        setOpenNav(false)
    }





  return (
    <div className='bg-[#030712] text-white w-full flex items-center justify-between py-6 px-10 mb-5    '>
        <h1 className='font-bold text-3xl  ' >&lt;OC /&gt;</h1>





        <ul className='hidden lg:flex items-center justify-center w-fit flex-row list-none ' >
            <li className='text-[#D1D5DB] font-[500] text-base mx-4 hover:text-white transition duration-300 ease-in-out  ' ><a href="#">About </a></li>
            <li className='text-[#D1D5DB] font-[500] text-base mx-4 hover:text-white transition duration-300 ease-in-out'><a href="#">Work </a></li>
            <li className='text-[#D1D5DB] font-[500] text-base mx-4 hover:text-white transition duration-300 ease-in-out'><a href="#">Testimonials </a></li>
            <li className='text-[#D1D5DB] font-[500] text-base mx-4 hover:text-white transition duration-300 ease-in-out'><a href="#">Contact </a></li>
            <li className='text-[#D1D5DB] font-[500] text-base mx-4 ml-9 hover:text-white transition duration-300 ease-in-out'><FaMoon/></li>
            <button className='bg-[#F9FAFB] font-[500] text-base mx-4 text-[#111827] rounded-2xl px-4 py-3 ' >Download CV</button>
        </ul>
      


       <button  className='block lg:hidden text-2xl' onClick={handleNav} > <FaBars  /> </button>












       {/* mobile menu  */}



       <div className= {`bg-[#030712] lg:hidden fixed w-full h-full top-0 left-0 z-50 flex flex-col gap-8 items-start justify-start py-3 transition duration-400 ease-in-out transform ${openNav? "translate-x-0 ": "translate-x-[-100%]" }`} >
        <div className='flex flex-row justify-between items-center w-full py-3 px-6 ' >
        <h1 className='font-bold text-3xl  ' >&lt;OC /&gt;</h1>

        <FaTimes onClick={closeNav} className='text-2xl' />
        </div>

       <ul className='flex flex-col items-start justify-center px-6   list-none border-b border-t border-[#1F2937] w-full py-2 ' >
            <li className='text-[#D1D5DB] font-[500] text-lg my-4 hover:text-white transition duration-300 ease-in-out  ' ><a href="#">About </a></li>
            <li className='text-[#D1D5DB] font-[500] text-lg my-4 hover:text-white transition duration-300 ease-in-out'><a href="#">Work </a></li>
            <li className='text-[#D1D5DB] font-[500] text-lg my-4 hover:text-white transition duration-300 ease-in-out'><a href="#">Testimonials </a></li>
            <li className='text-[#D1D5DB] font-[500] text-lg my-4 hover:text-white transition duration-300 ease-in-out'><a href="#">Contact </a></li>
        </ul>



        <div className='w-full flex flex-col items-start justify-center gap-7 py-2 px-6 ' >
        <div className='text-[#D1D5DB] font-[500] text-lg  hover:text-white transition duration-300 ease-in-out flex flex-row justify-between w-full '><p>Switch Theme</p> <FaMoon/></div>
        <button className='bg-[#F9FAFB] font-[500] text-base text-[#111827] rounded-2xl px-4 py-3 w-full  max-w-[400px] ' >Download CV</button>
        </div>
       </div>




    </div>
  )
}

export default Navbar