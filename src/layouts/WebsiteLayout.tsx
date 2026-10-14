import { Outlet } from "react-router-dom";
import Navbar from "../components/website-components/Navbar";
import Footer from "../components/website-components/Footer";





export default function WebsiteLayout() {
    return (
        <div className=" relative  " >

            <Navbar />


            <main className=" pt-16 md:pt-25 " >
                <Outlet />
            </main>


            <Footer />
        </div>
    )
}