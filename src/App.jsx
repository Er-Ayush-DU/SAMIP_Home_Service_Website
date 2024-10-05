import React, { useEffect, useState } from "react";
import TopHeader from "./Components/TopHeader";
import Hero from "./Components/Hero";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import AboutUs from "./Components/AboutUs";
import AboutPage from "./Components/AboutPage";
import Goals from "./Components/Goals";
import Total from "./Components/Total";
import Feature from "./Components/Feature";
import Testimonial from "./Components/Testimonial";
import FAQ from "./Components/FAQ";
import Preloader from "./Components/Preloader"; // Import Preloader component
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import React Router components
import { Element } from "react-scroll"; // Import for smooth scrolling

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
                    <Hero />
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

                    <Element name="contactSection">
                      <Contact />
                    </Element>

                    <FAQ />
                  </>
                }
              />
              <Route path="/about" element={<AboutPage />} />
            </Routes>
          </main>

          <footer>
            <Footer />
          </footer>
        </Router>
      )}
    </React.Fragment>
  );
}

export default App;