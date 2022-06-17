import React from "react";
import Footer from "../components/basicComponents/Footer";
import Navbar from "../components/basicComponents/Navbar";
import SectionCarousel from "../components/sections/SectionCarousel";
import SectionCategories from "../components/sections/SectionCategories";
import SectionProduct from "../components/sections/SectionProduct";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <div className="page-content page-home">
        <SectionCarousel />
        <SectionCategories />
        <SectionProduct />
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
