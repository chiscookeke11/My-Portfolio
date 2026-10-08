export default function Hero() {
    return (
        <section className="h-screen relative w-full flex items-center justify-center py-10 overflow-hidden">

            <h1 className="max-w-[350px] md:max-w-[650px] text-center font-semibold text-base md:text-lg tracking-wide">

                I’m Chinedu Okeke. I write code, build systems, and teach machines to solve problems.
                From web applications and developer tools to AI-powered products.

                <br />
                <br />

                Based in Nigeria. Building globally.
            </h1>


            {/* Top Left */}
            <div
                className="float-card absolute w-[175px] h-[200px] rounded-xl overflow-hidden bg-gray-400 top-10 -left-2"
                style={{
                    "--rotation": "-12deg",
                    animationDuration: "5s",
                    animationDelay: "-1s",
                } as React.CSSProperties}
            >
                <img
                    src="/landing_page_images/image_1.jpeg"
                    alt="image 1"
                    className="w-full h-full object-center object-cover"
                />
            </div>


            {/* Top Right */}
            <div
                className="float-card absolute w-[175px] h-[200px] rounded-xl overflow-hidden bg-gray-400 top-10 -right-2"
                style={{
                    "--rotation": "12deg",
                    animationDuration: "6s",
                    animationDelay: "-2s",
                } as React.CSSProperties}
            >
                <img
                    src="/landing_page_images/image_2.jpg"
                    alt="image 2"
                    className="w-full h-full object-center object-cover"
                />
            </div>


            {/* Right Bottom */}
            <div
                className="float-card absolute w-[175px] h-[200px] rounded-xl overflow-hidden bg-gray-400 bottom-40 -right-4"
                style={{
                    "--rotation": "12deg",
                    animationDuration: "5.5s",
                    animationDelay: "-3s",
                } as React.CSSProperties}
            >
                <img
                    src="/landing_page_images/image_3.jpg"
                    alt="image 3"
                    className="w-full h-full object-center object-cover"
                />
            </div>


            {/* Bottom Center */}
            <div
                className="float-card absolute w-[175px] h-[200px] rounded-xl overflow-hidden bg-gray-400 bottom-3 right-[25%]"
                style={{
                    "--rotation": "-6deg",
                    animationDuration: "6.5s",
                    animationDelay: "-1.5s",
                } as React.CSSProperties}
            >
                <img
                    src="/landing_page_images/image_4.jpg"
                    alt="image 4"
                    className="w-full h-full object-center object-cover"
                />
            </div>


            {/* Bottom Left */}
            <div
                className="float-card absolute z-10 w-[175px] h-[200px] rounded-xl overflow-hidden bg-gray-400 bottom-20 left-0"
                style={{
                    "--rotation": "-20deg",
                    animationDuration: "5.8s",
                    animationDelay: "-4s",
                } as React.CSSProperties}
            >
                <img
                    src="/landing_page_images/image_5.png"
                    alt="image 5"
                    className="w-full h-full object-center object-cover"
                />
            </div>


            {/* Bottom Left Center */}
            <div
                className="float-card absolute w-[175px] h-[200px] rounded-xl overflow-hidden bg-gray-400 bottom-5 left-[15%]"
                style={{
                    "--rotation": "20deg",
                    animationDuration: "7s",
                    animationDelay: "-2.5s",
                } as React.CSSProperties}
            >
                <img
                    src="/landing_page_images/image_6.jpeg"
                    alt="image 6"
                    className="w-full h-full object-center object-cover"
                />
            </div>

        </section>
    );
}