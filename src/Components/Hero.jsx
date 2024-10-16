import React from "react";

function Hero() {


    return (
        <div className="h-[550px] w-screen flex justify-around space-x-6 super-hero overflow-hidden">
            <div className="text-[#7F24C6] text-[50px] font-[700] tagline absolute top-24">
                Connecting Helpers, Protecting Homes
            </div>

            <div className="w-[45%] pl-16 mt-10 hero-content relative top-24">

                <div className="text-xl  font-[600] text-justify hero_content">
                    SAMIP: The Integrated Solution
                    At the heart of LUP's operations is SAMIP (Society All-in-one Management Integrated Platform), an innovative software platform designed to streamline various services and manage community issues effectively. SAMIP caters to two main user groups: residents and workers, offering a comprehensive suite of features including:
                    Attendance Management,
                    Garbage Collection Management,
                    Vehicle Management,
                    Vendor Management,
                    Complaint Management System,
                    SOS Alerts for emergencies,
                    QR-based systems for attendance tracking.
                    The platform enables residents to monitor services via smartphone apps, ensuring transparency and ease of access to information.
                </div>

                <div className="text-xl mt-2 font-[600] text-justify hero2_content hidden">
                    SAMIP (Society All-in-one Management Integrated Platform) is LUP's software solution for efficiently managing community services. It serves both residents and workers with features like attendance tracking, garbage and vehicle management, vendor oversight, and a complaint management system. It also includes SOS emergency alerts and QR-based systems for attendance. Residents can easily monitor services through smartphone apps, ensuring transparency and convenience.
                </div>

                <div className="text-xl mt-2 font-[600] text-justify hero3_content hidden">
                    SAMIP (Society All-in-one Management Integrated Platform) is LUP's software solution for managing community services efficiently. It offers features like attendance tracking, garbage and vehicle management, vendor oversight, and a complaint management system, along with SOS alerts and QR-based attendance systems. Residents can conveniently monitor services through smartphone apps, ensuring transparency.
                </div>
            </div>

            <div className="w-[55%] heroImg relative mt-20">

                <img
                    src="Hero_Images/society.png"
                    alt="Society Image"
                    className={`object-contain h-full w-full`}
                />
            </div>
        </div>
    );
}

export default Hero;