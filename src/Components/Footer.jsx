import React from "react";
import { IoMdMail } from "react-icons/io";
import { FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";


function Footer() {
    return (
        <React.Fragment>
            <div className="h-[15rem] bg-[#333131] text-white p-5">
                <div className="flex justify-between">
                    {/* Logo Section */}
                    <div className="h-[11rem] ">
                        <img className="h-[11rem]" src="src/assets/Images/samip-logo2.png" alt="Logo" />
                    </div>

                    {/* Contact Section */}
                    <div className="flex flex-col gap-2 justify-center">
                       <div>
                                <div className="flex  items-center">
                                        <span className="mr-2 flex"><IoMdMail /></span>
                                        infolokutthanfoundation.in
                                    </div>
                                    <div className="flex  items-center">
                                        <span className="mr-2"><FaPhone /></span>
                                        +91 01117479993
                                    </div>
                                    <div className="flex  items-center">
                                        <span className="mr-2"><FaMapMarkerAlt /></span>
                                        N-18, Kalkaji, New Delhi 110019
                                    </div>
                                </div>
                                <div className="flex mt-7 text-[1.5rem] justify-between">
                               <a href="#"> <BsInstagram /></a>
                               <a href="#"> <FaFacebookF /></a>
                               <a href="#">   <FaLinkedinIn /></a>
                               <a href="#"> <FaXTwitter /></a>
                               
                             
                               
                                </div>
                    </div>

                    {/* Quick Links */}
                    <div className="flex flex-col justify-center">
                        <div className="font-bold mb-2 ">Quick Links</div>
                        <a href="#" className="hover:underline">@M-Cell</a>
                        <a href="#" className="hover:underline">@Manacle</a>
                        <a href="#" className="hover:underline">@Lok Utthan</a>
                    </div>

                    {/* Google Maps Iframe Section */}
                    <div className="iframe w-[400px] h-[200px]">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224346.42715646436!2d77.06889735283102!3d28.52728034328008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3f114b2d91d%3A0x8e2a1e9ad54bc048!2sKalkaji%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1633045783913!5m2!1sen!2sin"
                            width="400"
                            height="200"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>
            </div>
            <div className="bg-[#504e4e] flex justify-center text-[#fff] font-semibold">
                <div>
                    All Rights Reserved @LUP
                </div>
            </div>
        </React.Fragment>
    );
}

export default Footer;
