import React from 'react'
import Vector from "../../assets/website/blue-pattern.png"
import Book1 from "../../assets/website/bookbanner1.avif";



const Banner = () => {
    const bgImage = {
        backgroundImage: `url(${Vector})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        // height: "100%",
        width: "100%",
    };
    return (
        <>
            <div className='min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200' style={bgImage}>
                <div className="container pb-8 sm:pb-8 ">
                    <div className="grid grid-cols-1 sm:grid-cols-2">
                        {/* text content section */}
                        <div
                            data-aos-once="true"
                            className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1">
                            <h1
                                data-aos="zoom-out"
                                data-aos-duration="500"
                                data-aos-once="true"
                                className="text-5xl sm:text-6xl lg:text-7xl font-bold">
                                Knowledge Grows on the Bookshelf of Patience
                            </h1>
                            <p
                                data-aos="slide-up"
                                data-aos-duration="500"
                                data-aos-delay="100"
                                className="text-sm ">
                                lorem His Life will forever be Changed dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                        {/* text content section */}
                        <div className="min-h-[450px] sm:min-h-[450px] flex justify-center items-center relative order-1 sm:order-2 ">
                            <div className="h-[300px] sm:h-[450px] overflow-hidden flex justify-center items-center">
                                <img
                                    data-aos="zoom-in"
                                    data-aos-once="true"
                                    src={Book1}
                                    alt="biryani img"
                                    className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-125 object-contain mx-auto"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner