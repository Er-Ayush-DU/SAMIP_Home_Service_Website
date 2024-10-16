import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import Hamburger from './Hamburger'; // Hamburger component ko import karo
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';

function TopHeader() {
    const [isFixed, setIsFixed] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false); // Menu open/close state
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            const offset = document.getElementById('affixElement').offsetTop;
            if (window.pageYOffset > offset) {
                setIsFixed(true);
            } else {
                setIsFixed(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen); // Menu ko toggle karo
        document.querySelector('.mobile-menu').classList.toggle('show');
    };



    return (
        <React.Fragment>
            <div className="topHead mb-2">
                {isFixed && <div style={{ height: '4.4rem' }}></div>}
                <div id="affixElement" className={`flex w-[100vw] justify-between bg-[#fff] h-[4.4rem] items-center ${isFixed ? 'fixed top-0 z-50' : ''}`}>
                    <a href="/" className="h-16 flex items-center pl-[1.99rem] top-logo cursor-pointer">
                        <img className="h-16" src="Hero_Images/samip-logo2.png" alt="Logo" />
                    </a>
                    {/* Desktop view */}
                    <div className="hidden md:flex justify-between items-center gap-20">
                        <div className="flex align-center gap-11 navItems z-[99]">
                            {/* Navigation Links */}
                            {location.pathname === '/' ? (
                                <ScrollLink to="heroSection" smooth={true} duration={800} offset={-80} className="navItem relative inline-block text-black after:absolute after:bg-[#2F2BF6] after:h-[2px] after:w-0 after:left-0 after:bottom-0 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full cursor-pointer">HOME</ScrollLink>
                            ) : (
                                <Link to="/" onClick={() => setIsMenuOpen(false)} className="navItem relative inline-block text-black after:absolute after:bg-[#2F2BF6] after:h-[2px] after:w-0 after:left-0 after:bottom-0 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full">HOME</Link>
                            )}

                            {location.pathname === '/' ? (
                                <ScrollLink to="aboutSection" smooth={true} duration={800} offset={-80} className="navItem relative inline-block text-black after:absolute after:bg-[#2F2BF6] after:h-[2px] after:w-0 after:left-0 after:bottom-0 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full cursor-pointer">ABOUT US</ScrollLink>
                            ) : (
                                <Link to="/" onClick={() => setIsMenuOpen(false)} className="navItem relative inline-block text-black after:absolute after:bg-[#2F2BF6] after:h-[2px] after:w-0 after:left-0 after:bottom-0 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full">ABOUT US</Link>
                            )}

                            {location.pathname === '/' ? (
                                <ScrollLink to="featureSection" smooth={true} duration={800} offset={-80} className="navItem relative inline-block text-black after:absolute after:bg-[#2F2BF6] after:h-[2px] after:w-0 after:left-0 after:bottom-0 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full cursor-pointer">FEATURES</ScrollLink>
                            ) : (
                                <Link to="/" onClick={() => setIsMenuOpen(false)} className="navItem relative inline-block text-black after:absolute after:bg-[#2F2BF6] after:h-[2px] after:w-0 after:left-0 after:bottom-0 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full">FEATURES</Link>
                            )}

                            {location.pathname === '/' ? (
                                <ScrollLink to="testimonialsSection" smooth={true} duration={800} offset={-80} className="navItem relative inline-block text-black after:absolute after:bg-[#2F2BF6] after:h-[2px] after:w-0 after:left-0 after:bottom-0 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full cursor-pointer">TESTIMONIALS</ScrollLink>
                            ) : (
                                <Link to="/" onClick={() => setIsMenuOpen(false)} className="navItem relative inline-block text-black after:absolute after:bg-[#2F2BF6] after:h-[2px] after:w-0 after:left-0 after:bottom-0 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full">TESTIMONIALS</Link>
                            )}

                            {location.pathname === '/' ? (
                                <ScrollLink to="contactSection" smooth={true} duration={800} offset={-80} className="navItem relative inline-block text-black after:absolute after:bg-[#2F2BF6] after:h-[2px] after:w-0 after:left-0 after:bottom-0 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full cursor-pointer">CONTACT US</ScrollLink>
                            ) : (
                                <Link to="/" onClick={() => setIsMenuOpen(false)} className="navItem relative inline-block text-black after:absolute after:bg-[#2F2BF6] after:h-[2px] after:w-0 after:left-0 after:bottom-0 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full">CONTACT US</Link>
                            )}

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
                            {window.innerWidth < 400 ? (
                                <FontAwesomeIcon icon={faUserPlus} /> // Show icon
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
                    <div
                        className={`mobile-menu fixed top-0 left-0 w-full bg-white z-50`}
                        style={{
                            position: 'fixed',
                            top: `${document.getElementById('affixElement').offsetHeight}px`,
                            left: 0,
                            width: '100%',
                        }}
                    >
                        <Link to="/" className="navItem" onClick={() => setIsMenuOpen(false)}>HOME</Link>
                        <Link to="" className="navItem" onClick={() => setIsMenuOpen(false)}>ABOUT US</Link>
                        <ScrollLink to="featureSection" smooth={true} duration={500} className="navItem" onClick={() => setIsMenuOpen(false)}>FEATURES</ScrollLink>
                        <ScrollLink to="testimonialsSection" smooth={true} duration={500} className="navItem" onClick={() => setIsMenuOpen(false)}>TESTIMONIALS</ScrollLink>
                        <ScrollLink to="contactSection" smooth={true} duration={500} className="navItem" onClick={() => setIsMenuOpen(false)}>CONTACT US</ScrollLink>
                    </div>
                )}
            </div>
        </React.Fragment>
    );
}

export default TopHeader;