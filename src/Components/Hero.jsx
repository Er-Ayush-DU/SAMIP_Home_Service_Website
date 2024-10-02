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
                  <div className=" relative left-5">Protecting Homes</div>
                  </div>
                    <div className="text-[18px] font-[400]">
                    This is an eco-friendly service providing reliable, <br /> green-focused handyman solutions for all your <br /> home needs.
                    </div>

                </div>

               

            </div>
           </React.Fragment>
}

export default Hero;