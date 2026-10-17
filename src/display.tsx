import { motion, useScroll, useTransform } from "framer-motion";

const Display = () => {
    const { scrollYProgress } = useScroll();

    const x = useTransform(
        scrollYProgress,
        [0, 0.25, 0.5, 0.75, 1],
        [0, 300, 100, -200, 300],
    );

    const y = useTransform(
        scrollYProgress,
        [0, 0.25, 0.5, 0.75, 1],
        [0, 200, 400, 600, 800],
    );

    return (
        <div
            className={` w-full h-[600vh] transition bg-black flex flex-col relative  `}
        >
            <section className="text-white">One other section</section>

            <section className="w-full bg-green-700 h-[50vh] mt-auto grid grid-cols-3 place-items-center gap-10  ">
                <div className=" w-full h-40 flex items-center justify-center bg-blue-500 ">
                    <div className=" w-20 h-20 bg-orange-400 "></div>
                </div>

                <div className=" w-full h-40 flex items-center justify-center bg-blue-500 ">
                    <motion.div
                        style={{
                            x,
                            y,
                        }}
                        className="fixed top-20 left-20 w-20 h-20 rounded-full bg-red-500"
                    />
                </div>

                <div className=" w-full h-40 flex items-center justify-center bg-blue-500 ">
                    <motion.div
                        style={{
                            x,
                            y,
                        }}
                        className=" w-20 h-20 bg-orange-400 "
                    ></motion.div>
                </div>
            </section>
        </div>
    );
};

export default Display;
