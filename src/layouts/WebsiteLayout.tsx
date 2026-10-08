import { Outlet } from "react-router-dom";
import Navbar from "../components/website-components/Navbar";





export default function WebsiteLayout() {
    return (
        <div className=" relative  " >

            <Navbar />


            <main>
                <Outlet />
            </main>


            {/* footer here  */}
        </div>
    )
}