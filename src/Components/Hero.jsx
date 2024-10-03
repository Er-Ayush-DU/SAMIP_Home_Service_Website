import React from "react";

function Hero(){
    return <React.Fragment>

            <div className="relative ">
                <div className="w-[100vw] flex justify-end">
                    <div className="w-[68vw] h-[80vh] overflow-hidden select-none">
                        <img  src="src/assets/Images/hero_image.jpg" alt="" />
                    </div>
                </div>
                <div className="absolute top-[6.7rem] left-14">
                  <div className="text-[#7F24C6] text-[56px] font-[700] select-none">
                  <div className="  ">Connecting Helpers,</div>
                  <div className="">Protecting Homes</div>
                  </div>
                    <div className="text-[18px] font-[600] w-[36%] justify-around pt-3 ml-4">
                    SAMIP is an integrated platform by LUP for managing community services, offering features like attendance, vehicle, garbage, and vendor management. It also includes a complaint system and emergency SOS alerts. Residents can monitor these services through a smartphone app for transparency and convenience.
                    </div>

                </div>

               

            </div>
           </React.Fragment>
}

export default Hero;