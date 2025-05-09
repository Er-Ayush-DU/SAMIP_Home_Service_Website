import React, { useEffect, useState } from "react";
import TopHeader from "./components/TopHeader";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import AboutPage from "./components/AboutPage";
import LUP from "./Components/LUP";
import MANACLE from "./Components/MANACLE";
import Goals from "./components/Goals";
import Total from "./components/Total";
import Feature from "./components/Feature";
import Testimonial from "./components/Testimonial";
import FAQ from "./components/FAQ";
import Preloader from "./components/Preloader"; // Import Preloader component
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import React Router components
import { Element } from "react-scroll"; // Import for smooth scrolling
import Feature_Module from "./components/Feature_Module";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // 1 second delay

    return () => clearTimeout(timer); // Cleanup timeout
  }, []);

  return (
    <React.Fragment>
      {isLoading ? (
        <Preloader /> // Show Preloader while loading
      ) : (
        <Router>
          <header>
            <TopHeader /> {/* Fixed Header with navigation */}
          </header>

          <main>
            <Routes>
              {/* Home page */}
              <Route
                path="/"
                element={
                  <>
                    <Element name='heroSection'>

                      <Hero />
                    </Element>
                    <Element name='aboutSection'>
                      <AboutUs></AboutUs>
                    </Element>
                    <Goals />
                    <Total />

                    {/* Feature section wrapped in Element for smooth scroll */}
                    <Element name="featureSection">
                      <Feature />
                    </Element>

                    {/* Smooth scroll sections */}
                    <Element name="testimonialsSection">
                      <Testimonial />
                    </Element>

                    <Contact />

                    <FAQ />
                  </>
                }
              />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/lup" element={<LUP />} />
              <Route path="/manacle" element={<MANACLE />} />
              <Route path="/feature" element={<Feature_Module />} />



            </Routes>

          </main>

          <footer>
            <Element name="contactSection">
              <Footer />
            </Element>
          </footer>
        </Router>
      )}
    </React.Fragment>
  );
}

export default App;