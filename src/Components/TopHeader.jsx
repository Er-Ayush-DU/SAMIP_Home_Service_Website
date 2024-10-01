import React, { useEffect, useState } from "react";

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
        handleScroll(); // Run on page load to handle the case where the user starts at a scrolled position

        return () => {
            window.removeEventListener('scroll', handleScroll); // Cleanup on unmount
        };
    }, []);

    return (
        <React.Fragment>
            <div className="topHead mb-2">
                <div id="affixElement" className={`flex w-[100vw] justify-between bg-[#fff] h-[4.4rem] items-center ${isFixed ? 'fixed top-0 z-50' : ''}`}>
                    <div className="h-16 flex items-center pl-[1.99rem]">
                        <img className="h-16" src="src/assets/Images/samip-logo2.png" alt="Logo" />
                    </div>
                    <div className="flex justify-around items-center gap-20">
                        <div className="flex align-center gap-11 navItems">
                            <a className="navItem" href="#">HOME</a>
                            <a className="navItem" href="#">ABOUT US</a>
                            <a className="navItem" href="#">FEATURES</a>
                            <a className="navItem" href="#">TESTIMONIALS</a>
                            <a className="navItem" href="#">CONTACT US</a>
                        </div>
                        <div className="pr-12">
                            <div className="bg-[#2F2BF6] p-[0.3rem] pl-[0.9rem] pr-[0.9rem] rounded-2xl sign_up_button">
                                <a href="#" className="sign_up_button_content">SIGN UP</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default TopHeader;
