import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // React Router Link for navigation
import { Link as ScrollLink } from "react-scroll"; // ScrollLink for smooth scrolling

function TopHeader() {
    const [isFixed, setIsFixed] = useState(false);

    useEffect(() => {
        const affixElement = document.getElementById('affixElement');
        const offset = affixElement.offsetTop;

        function handleScroll() {
            if (window.pageYOffset > offset) {
                setIsFixed(true);
            } else {
                setIsFixed(false);
            }
        }

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Run on page load in case of a scrolled position

        return () => {
            window.removeEventListener('scroll', handleScroll); // Cleanup on unmount
        };
    }, []);

    return (
        <React.Fragment>
            <div className="topHead mb-2">
                {/* Placeholder to prevent content from jumping */}
                {isFixed && <div style={{ height: '4.4rem' }}></div>}

                {/* Header with fixed position on scroll */}
                <div id="affixElement" className={`flex w-[100vw] justify-between bg-[#fff] h-[4.4rem] items-center ${isFixed ? 'fixed top-0 z-50' : ''}`}>
                    <div className="h-16 flex items-center pl-[1.99rem]">
                        <img className="h-16" src="src/assets/Images/samip-logo2.png" alt="Logo" />
                    </div>
                    <div className="flex justify-around items-center gap-20">
                        <div className="flex align-center gap-11 navItems">
                            {/* React Router Links for Home and About */}
                            <Link
                                to="/"
                                className="navItem relative inline-block text-black after:absolute after:bg-[#2F2BF6]  after:h-[2px] after:w-0 after:left-0 after:bottom-0 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full cursor-pointer"
                            >
                                HOME
                            </Link>

                            <Link
                                to=""
                                className="navItem relative inline-block text-black after:absolute after:bg-[#2F2BF6]  after:h-[2px] after:w-0 after:left-0 after:bottom-0 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full cursor-pointer"
                            >
                                ABOUT US
                            </Link>

                            {/* Features link with smooth scroll */}
                            <ScrollLink
                                to="featureSection"
                                smooth={true}
                                duration={500}
                                offset={-70} // Adjust for header height
                                className="navItem relative inline-block text-black after:absolute after:bg-[#2F2BF6] after:h-[2px] after:w-0 after:left-0 after:bottom-0 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full cursor-pointer"
                            >
                                FEATURES
                            </ScrollLink>

                            {/* Smooth Scroll for Testimonials */}
                            <ScrollLink
                                to="testimonialsSection"
                                smooth={true}
                                duration={500}
                                offset={-70} // Adjust for header height
                                className="navItem relative inline-block text-black after:absolute after:bg-[#2F2BF6]  after:h-[2px] after:w-0 after:left-0 after:bottom-0 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full cursor-pointer"
                            >
                                TESTIMONIALS
                            </ScrollLink>

                            {/* Smooth Scroll for Contact */}
                            <ScrollLink
                                to="contactSection"
                                smooth={true}
                                duration={500}
                                offset={-70} // Adjust for header height
                                className="navItem relative inline-block text-black after:absolute after:bg-[#2F2BF6]  after:h-[2px] after:w-0 after:left-0 after:bottom-0 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full cursor-pointer"
                            >
                                CONTACT US
                            </ScrollLink>
                        </div>
                        <div className="pr-12">
                            <div className="bg-[#2F2BF6] p-[0.3rem] pl-[0.9rem] pr-[0.9rem] rounded-2xl sign_up_button">
                                <a href="#" className="sign_up_button_content cursor-pointer">SIGN UP</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default TopHeader;
