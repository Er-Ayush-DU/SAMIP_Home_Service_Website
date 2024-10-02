// src/components/Preloader.js

import React from "react";

function Preloader() {
  return (
    <div className="preloader flex justify-center items-center h-screen bg-white">
      {/* Replace the src with your own image path */}
      <img
        src="src/assets/Images/samip-logo2.png"
        alt="Loading..."
        className="w-36 h-36"  // Adjust the size of the image
      />
    </div>
  );
}

export default Preloader;
