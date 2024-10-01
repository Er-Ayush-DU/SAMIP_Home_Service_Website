import React from "react";
import TopHeader from "./Components/TopHeader";
import Hero from "./Components/Hero";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import AboutUs from "./Components/AboutUs.jsx";
import Goals from "./components/Goals";
import Total from "./components/Total";
import Feature from "./Components/Feature.jsx";
import Testimonial from "./components/Testimonial";
import FAQ from "./Components/FAQ.jsx";

function App() {
  return <React.Fragment>
    <header>
      <TopHeader></TopHeader>
      <Hero></Hero>
    </header>
    <main>
      <AboutUs></AboutUs>
      <Goals></Goals>
      <Total></Total>
      <Feature></Feature>
      <Testimonial></Testimonial>
      <Contact></Contact>
      <FAQ></FAQ>

    </main>


    <footer>
      <Footer></Footer>
    </footer>
  </React.Fragment>

}

export default App;
