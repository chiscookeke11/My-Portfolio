import { BiChevronRight } from "react-icons/bi"
import { BsInstagram, BsThreads } from "react-icons/bs"
import { FaFacebook, FaXTwitter } from "react-icons/fa6"
import { FiGithub } from "react-icons/fi"
import { IoCopyOutline } from "react-icons/io5"
import { LiaLinkedin } from "react-icons/lia"
import { MdEmail, MdOutlineMailOutline } from "react-icons/md"
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";



export default function Contact() {


    return (
        <>
            <Helmet>
                <title>Contact | Chinedu Emmanuel Okeke</title>

                <meta
                    name="description"
                    content="Get in touch with Chinedu Emmanuel Okeke, a Software Engineer and AI/ML Engineer. Connect for software engineering opportunities, AI projects, collaborations, open-source contributions, and technical discussions."
                />

                <meta
                    name="keywords"
                    content="Contact Chinedu Emmanuel Okeke, Hire Software Engineer Nigeria, AI/ML Engineer, Software Developer, Technical Collaboration, Open Source"
                />

                <meta name="author" content="Chinedu Emmanuel Okeke" />

                <link
                    rel="canonical"
                    href="https://www.okekechinedu.xyz/contact"
                />

                {/* Open Graph */}
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Contact Chinedu Emmanuel Okeke" />
                <meta
                    property="og:description"
                    content="Looking to collaborate, discuss a project, or explore opportunities? Connect with Chinedu Emmanuel Okeke."
                />
                <meta
                    property="og:url"
                    content="https://www.okekechinedu.xyz/contact"
                />
                <meta
                    property="og:image"
                    content="https://www.okekechinedu.xyz/og-image.png"
                />

                {/* Twitter / X */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Contact Chinedu Emmanuel Okeke" />
                <meta
                    name="twitter:description"
                    content="Connect with Chinedu for software engineering, AI/ML projects, collaborations, and professional opportunities."
                />
                <meta
                    name="twitter:image"
                    content="https://www.okekechinedu.xyz/og-image.png"
                />
            </Helmet>


            <div className="w-full py-12 md:py-20 px-[2%] flex  items-center justify-center font-open-sans " >



                <div className=" flex flex-col items-start  w-full max-w-xl gap-5 " >
                    <h1 className="font-bold text-2xl md:text-3xl tracking-wide mb-2 ">Contact</h1>


                    <div className=" w-full flex flex-col gap-1.5  " >

                        {/* Email */}
                        <a
                            href="mailto:chiscookeke11@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full flex items-center justify-between group cursor-pointer
                        py-4 border-b border-white/15
                        "
                        >
                            <div className="w-fit flex items-center gap-2" >
                                <MdOutlineMailOutline className="opacity-[60%]" size={14} />
                                <h4 className="text-[15px] font-semibold tracking-wide " >Email</h4>
                            </div>



                            <div className="w-fit flex items-center gap-4 opacity-[60%] group-hover:opacity-[100%] " >
                                <h5 className="text-[13px] tracking-wide font-medium text-white   " >chiscookeke11@gmail.com</h5>
                                <button
                                    type="button"
                                    className="cursor-pointer"
                                    onClick={async (e) => {
                                        e.preventDefault();
                                        e.stopPropagation();

                                        try {
                                            await navigator.clipboard.writeText("chiscookeke11@gmail.com");
                                            toast.success("Email copied successfully!");
                                        } catch (error) {
                                            console.error("Failed to copy email:", error);
                                        }
                                    }}
                                    aria-label="Copy email address"
                                >
                                    <IoCopyOutline size={20} />
                                </button>
                            </div>
                        </a>


                        {/* LinkedIn */}
                        <a
                            href="https://www.linkedin.com/in/chinedu-emmanuel-okeke-4080b8292/?isSelfProfile=true"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full flex items-center justify-between group cursor-pointer
                           py-4 border-b border-white/15
                        "
                        >
                            <div className="w-fit flex items-center gap-2" >
                                <LiaLinkedin className="opacity-[60%]" size={14} />
                                <h4 className="text-[15px] font-semibold tracking-wide " >LinkedIn</h4>
                            </div>



                            <div className="w-fit flex items-center gap-2 opacity-[60%] group-hover:opacity-[100%] " >
                                <h5 className="text-[13px] tracking-wide font-medium text-white   " >Chinedu Emmanuel Okeke</h5>
                                <button>
                                    <BiChevronRight size={14} />
                                </button>
                            </div>
                        </a>



                        {/* Github */}
                        <a
                            href="https://github.com/chiscookeke11"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full flex items-center justify-between group cursor-pointer
                       py-4 border-b border-white/15
                    "
                        >
                            <div className="w-fit flex items-center gap-2" >
                                <FiGithub className="opacity-[60%]" size={14} />
                                <h4 className="text-[15px] font-semibold tracking-wide " >Github</h4>
                            </div>



                            <div className="w-fit flex items-center gap-2 opacity-[60%] group-hover:opacity-[100%] " >
                                <h5 className="text-[13px] tracking-wide font-medium text-white   " >@chiscookeke11</h5>
                                <button>
                                    <BiChevronRight size={14} />
                                </button>
                            </div>
                        </a>


                        {/* Instagram  */}
                        <a
                            href="https://www.instagram.com/chiscookeke11/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full flex items-center justify-between group cursor-pointer
                       py-4 border-b border-white/15
                    " >
                            <div className="w-fit flex items-center gap-2" >
                                <BsInstagram className="opacity-[60%]" size={14} />
                                <h4 className="text-[15px] font-semibold tracking-wide " >Instagram</h4>
                            </div>



                            <div className="w-fit flex items-center gap-2 opacity-[60%] group-hover:opacity-[100%] " >
                                <h5 className="text-[13px] tracking-wide font-medium text-white   " >@chiscookeke11</h5>
                                <button>
                                    <BiChevronRight size={14} />
                                </button>
                            </div>
                        </a>



                        {/* Threads  */}
                        <a
                            href="https://www.threads.com/@chiscookeke11"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full flex items-center justify-between group cursor-pointer
                        py-4 border-b border-white/15
                     " >
                            <div className="w-fit flex items-center gap-2" >
                                <BsThreads className="opacity-[60%]" size={14} />
                                <h4 className="text-[15px] font-semibold tracking-wide " >Threads</h4>
                            </div>



                            <div className="w-fit flex items-center gap-2 opacity-[60%] group-hover:opacity-[100%] " >
                                <h5 className="text-[13px] tracking-wide font-medium text-white   " >@chiscookeke11</h5>
                                <button>
                                    <BiChevronRight size={14} />
                                </button>
                            </div>
                        </a>




                        {/* X/Twitter */}
                        <a
                            href="https://x.com/chisco_JS"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full flex items-center justify-between group cursor-pointer
                        py-4 border-b border-white/15
                     " >
                            <div className="w-fit flex items-center gap-2" >
                                <FaXTwitter className="opacity-[60%]" size={14} />
                                <h4 className="text-[15px] font-semibold tracking-wide " >X/Twitter</h4>
                            </div>



                            <div className="w-fit flex items-center gap-2 opacity-[60%] group-hover:opacity-[100%] " >
                                <h5 className="text-[13px] tracking-wide font-medium text-white   " >@chisco_JS</h5>
                                <button>
                                    <BiChevronRight size={14} />
                                </button>
                            </div>
                        </a>




                        {/* Facebook */}
                        <a
                            href="https://web.facebook.com/profile.php?id=61550978886067"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full flex items-center justify-between group cursor-pointer
                           py-4
                        " >
                            <div className="w-fit flex items-center gap-2" >
                                <FaFacebook className="opacity-[60%]" size={14} />
                                <h4 className="text-[15px] font-semibold tracking-wide " >Facebook</h4>
                            </div>



                            <div className="w-fit flex items-center gap-2 opacity-[60%] group-hover:opacity-[100%] " >
                                <h5 className="text-[13px] tracking-wide font-medium text-white   " >@Emmanuel Okeke</h5>
                                <button>
                                    <BiChevronRight size={14} />
                                </button>
                            </div>
                        </a>


                    </div>


                </div>



            </div>
        </>
    )
}