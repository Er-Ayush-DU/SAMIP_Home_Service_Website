import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import Hamburger from './Hamburger'; // Hamburger component ko import karo
import { FaUserPlus } from 'react-icons/fa'; // Example icon import

function TopHeader() {
    const [isFixed, setIsFixed] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false); // Menu open/close state
    const [isMobile, setIsMobile] = useState(window.innerWidth < 400); // State for mobile view

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

        function handleResize() {
            setIsMobile(window.innerWidth < 400); // Update mobile state
        }

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize); // Add resize event listener
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize); // Clean up
        };
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen); // Menu ko toggle karo
    };

    return (
        <React.Fragment>
            <div className="topHead mb-2">
                {isFixed && <div style={{ height: '4.4rem' }}></div>}
                <div id="affixElement" className={`flex w-[100vw] justify-between bg-[#fff] h-[4.4rem] items-center ${isFixed ? 'fixed top-0 z-50' : ''}`}>
                    <div className="h-16 flex items-center pl-[1.99rem]">
                        <img className="h-16" src="src/assets/Images/samip-logo2.png" alt="Logo" />
                    </div>
                    {/* Desktop view */}
                    <div className="hidden md:flex justify-between items-center gap-20">
                        <div className="flex align-center gap-11 navItems z-[99]">
                            {/* Navigation Links with hover effect */}
                            <Link to="/" className="navItem relative inline-block text-black after:absolute after:bg-[#2F2BF6] after:h-[2px] after:w-0 after:left-0 after:bottom-0 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full cursor-pointer">
                                HOME
                            </Link>
                            <Link to="" className="navItem relative inline-block text-black after:absolute after:bg-[#2F2BF6] after:h-[2px] after:w-0 after:left-0 after:bottom-0 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full cursor-pointer">
                                ABOUT US
                            </Link>
                            <ScrollLink to="featureSection" smooth={true} duration={500} className="navItem relative inline-block text-black after:absolute after:bg-[#2F2BF6] after:h-[2px] after:w-0 after:left-0 after:bottom-0 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full cursor-pointer">
                                FEATURES
                            </ScrollLink>
                            <ScrollLink to="testimonialsSection" smooth={true} duration={500} className="navItem relative inline-block text-black after:absolute after:bg-[#2F2BF6] after:h-[2px] after:w-0 after:left-0 after:bottom-0 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full cursor-pointer">
                                TESTIMONIALS
                            </ScrollLink>
                            <ScrollLink to="contactSection" smooth={true} duration={500} className="navItem relative inline-block text-black after:absolute after:bg-[#2F2BF6] after:h-[2px] after:w-0 after:left-0 after:bottom-0 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full cursor-pointer">
                                CONTACT US
                            </ScrollLink>
                        </div>
                        <div className="pr-12">
                            <div className="bg-[#2F2BF6] p-[0.3rem] pl-[0.9rem] pr-[0.9rem] rounded-2xl sign_up_button">
                                <a href="#" className="sign_up_button_content cursor-pointer">SIGN UP</a>
                            </div>
                        </div>
                    </div>

                    {/* Hamburger Menu */}
                    <div className="md:hidden flex items-center pr-4">
                        <div className="pr-12">
                            {/* Conditional rendering for icon or button */}
                            {isMobile ? ( // Use isMobile state
                                <FaUserPlus className="icon" /> // Show icon
                            ) : (
                                <div className="bg-[#2F2BF6] p-[0.3rem] pl-[0.9rem] pr-[0.9rem] rounded-2xl sign_up_button">
                                    <a href="#" className="sign_up_button_content cursor-pointer">SIGN UP</a>
                                </div>
                            )}
                        </div>
                        <Hamburger toggleMenu={toggleMenu} />
                    </div>
                </div>
                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="mobile-menu">
                        <Link to="/" className="navItem">HOME</Link>
                        <Link to="" className="navItem">ABOUT US</Link>
                        <ScrollLink to="featureSection" smooth={true} duration={500} className="navItem">FEATURES</ScrollLink>
                        <ScrollLink to="testimonialsSection" smooth={true} duration={500} className="navItem">TESTIMONIALS</ScrollLink>
                        <ScrollLink to="contactSection" smooth={true} duration={500} className="navItem">CONTACT US</ScrollLink>
                    </div>
                )}
            </div>
        </React.Fragment>
    );
}

export default TopHeader;
