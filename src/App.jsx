import React, { useEffect, useState } from "react";
import TopHeader from "./Components/TopHeader";
import Hero from "./Components/Hero";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import AboutUs from "./Components/AboutUs";
import Goals from "./Components/Goals";
import Total from "./Components/Total";
import Feature from "./Components/Feature";
import Testimonial from "./Components/Testimonial";
import FAQ from "./Components/FAQ";
import Preloader from "./Components/Preloader"; // Import Preloader component

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Set a timer to simulate loading for 2 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // 2000 milliseconds = 2 seconds

    return () => clearTimeout(timer); // Cleanup the timeout when the component unmounts
  }, []);

  return (
    <React.Fragment>
      {isLoading ? (
        // Show Preloader while loading
        <Preloader />
      ) : (
        // Show main content after loading
        <>
          <header>
            <TopHeader />
            <Hero />
          </header>
          <main>
            <AboutUs />
            <Goals />
            <Total />
            <Feature />
            <Testimonial />
            <Contact />
            <FAQ />
          </main>
          <footer>
            <Footer />
          </footer>
        </>
      )}
    </React.Fragment>
  );
}

export default App;
