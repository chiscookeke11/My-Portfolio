import { footer_pages_data, footer_social_links } from "../../data/footer_data";




export default function Footer() {
    return (
        <footer className="w-full flex items-center justify-center border-t border-white/15  tracking-wide " >


            <div className="w-full max-w-350   py-16 px-[5%] md:px-[3%] flex items-start justify-between flex-col md:flex-row gap-16  md:gap-20 " >
                <div className="w-fit flex items-start gap-10 flex-col " >
                    <p className="text-white opacity-[60%] font-medium text-[15px] " >Based in Nigeria.
                        <br />
                        Building globally.</p>

                    <small className="text-white opacity-[60%] font-medium text-[15px] " >
                        ©{new Date().getFullYear()} Chinedu Okeke
                    </small>
                </div>


                <div className="flex flex-col items-start gap-2" >
                    {footer_pages_data.map((d, i) => (
                        <a
                            href={d.path}
                            key={i}
                            className="text-white opacity-[60%] hover:opacity-100 text-[15px] font-medium duration-200 ease-in-out transition-all " >
                            {d.label}
                        </a>
                    ))}
                </div>



                <div className="flex flex-col items-start gap-2">
                    {footer_social_links.map((d, i) => (
                        <a
                            href={d.path}
                            key={i}
                            target="_blank"
                            className="text-white opacity-[60%] hover:opacity-100 text-[15px] font-medium duration-200 ease-in-out transition-all " >
                            {d.label}
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    )
}