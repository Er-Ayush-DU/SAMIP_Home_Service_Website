import React from "react";

function Hero() {
    return <React.Fragment>

        <div className="h-auto w-screen flex justify-around space-x-6">
            <div className="w-2/5 pl-16 mt-10 hero-content md:text-[40px] md:font-medium !important">
                <div className="text-[#7F24C6] text-[56px] font-[700] tagline">
                    Connecting Helpers, Protecting Homes
                </div>
                <div className="text-[18px] font-[600] text-justify pt-10 content">
                    SAMIP is an integrated platform by LUP for managing community services, offering features like attendance, vehicle, garbage, and vendor management. It also includes a complaint system and emergency SOS alerts. Residents can monitor these services through a smartphone app for transparency and convenience.
                </div>
            </div>


            <div className="w-3/5 heroImg">
                <img src="Hero_Images/hero_image.jpg" alt="" className="object-fill h-full w-full" />
            </div>
        </div>

    </React.Fragment>
}

export default Hero;