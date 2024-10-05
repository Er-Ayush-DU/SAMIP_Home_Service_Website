import React, { useState, useEffect } from "react";

function Hero() {
    const [activeImage, setActiveImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveImage((prevImage) => (prevImage === 0 ? 1 : 0));
        }, 3000); // Change image every 5 seconds

        return () => clearInterval(interval); // Clear interval on unmount
    }, []);

    return (
        <div className="h-[550px] w-screen flex justify-around space-x-6">
            <div className="w-2/5 pl-16 mt-10 hero-content md:text-[40px] md:font-medium !important">
                <div className="text-[#7F24C6] text-[56px] font-[700] tagline">
                    Connecting Helpers, Protecting Homes
                </div>
                <div className="text-[18px] font-[600] text-justify pt-10 content">
                    SAMIP is an integrated platform by LUP for managing community services, offering features like attendance, vehicle, garbage, and vendor management. It also includes a complaint system and emergency SOS alerts. Residents can monitor these services through a smartphone app for transparency and convenience.
                </div>
            </div>

            <div className="w-3/5 heroImg relative">
                <img
                    src="Hero_Images/workers.png"
                    alt="Hero Image"
                    className={`object-fill h-cover w-full absolute top-0 left-0 transition-opacity duration-1000 ${activeImage === 0 ? "opacity-100" : "opacity-0"
                        }`}
                />
                <img
                    src="Hero_Images/society.png"
                    alt="Society Image"
                    className={`object-cover h-full w-full absolute top-0 left-0 transition-opacity duration-1000 ${activeImage === 1 ? "opacity-100" : "opacity-0"
                        }`}
                />
            </div>
        </div>
    );
}

export default Hero;
