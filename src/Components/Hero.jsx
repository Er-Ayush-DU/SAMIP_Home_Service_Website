import React, { useState, useEffect } from "react";

function Hero() {
    const [activeImage, setActiveImage] = useState(0);
    const [typedText, setTypedText] = useState(""); // Typing text
    const [wordIndex, setWordIndex] = useState(0); // Track the current word
    const [letterIndex, setLetterIndex] = useState(0); // Track the current letter
    const [isDeleting, setIsDeleting] = useState(false); // To track if we are deleting text

    const words = ["Vendor Management", "Garbage Management", "Vehicle Management", "Complaint System"]; // Words array

    // Image change logic
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveImage((prevImage) => (prevImage === 0 ? 1 : 0));
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    // Typing and deleting effect logic
    useEffect(() => {
        let timeout;
        if (!isDeleting && letterIndex < words[wordIndex].length) {
            // Typing forward
            timeout = setTimeout(() => {
                setTypedText((prev) => prev + words[wordIndex][letterIndex]);
                setLetterIndex(letterIndex + 1);
            }, 150); // Typing speed
        } else if (isDeleting && letterIndex > 0) {
            // Deleting backward
            timeout = setTimeout(() => {
                setTypedText((prev) => prev.slice(0, -1)); // Remove last letter
                setLetterIndex(letterIndex - 1);
            }, 100); // Deleting speed
        } else if (!isDeleting && letterIndex === words[wordIndex].length) {
            // Pause before starting deletion
            timeout = setTimeout(() => {
                setIsDeleting(true); // Start deleting after a pause
            }, 2000); // 2 second pause after typing the full word
        } else if (isDeleting && letterIndex === 0) {
            // When fully deleted, move to next word
            setIsDeleting(false); // Switch to typing mode
            setWordIndex((prevIndex) => (prevIndex + 1) % words.length); // Move to next word
        }

        return () => clearTimeout(timeout);
    }, [letterIndex, isDeleting, wordIndex]);

    return (
        <div className="h-[500px] w-screen flex justify-around space-x-6">
            <div className="w-[45%] pl-16 mt-10 hero-content">
                <div className="text-[#7F24C6] text-[50px] font-[700] tagline">
                    Connecting Helpers, Protecting Homes
                </div>
                <div className="bg-emerald-200 mt-10 h-14 overflow-hidden">
                    <div className="text-3xl text-[#2F2BF6] font-bold h-auto">SAMIP FEATURES : <span className="text-black bg-red-300">{typedText}</span></div>{/* Display typing text */}
                </div>
                <div className="text-xl font-[600] text-justify content">
                    SAMIP is an integrated platform by LUP for managing community services, offering features like attendance, vehicle, garbage, and vendor management. It also includes a complaint system and emergency SOS alerts. Residents can monitor these services through a smartphone app for transparency and convenience.
                </div>
            </div>

            <div className="w-[55%] heroImg relative">
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