import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { HomeHero } from "../components/hero";
import Footer from "../components/Footer";
import VendorCards from "../components/Cards/VendorCards";
import ProductCards from "../components/Cards/ProductCards";

import MTNbtn from "../components/Buttons/Vendorbtns/MTNbtn";
import LegalMobtn from "../components/Buttons/Vendorbtns/LegalMobtn";
import Trulancebtn from "../components/Buttons/Vendorbtns/Trulancebtn";
import Havenbtn from "../components/Buttons/Vendorbtns/Havenbtn";
import ImpactCards from "../components/Cards/ImpactCards";
import WhyChooseUsCards from "../components/Cards/WhyChooseUsCards";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <HomeHero />
      <VendorCards />
      <VendorBtns />
      <ProductCards />
    </>
  );
};
const VendorBtns = () => {
  return (
    <>
      <h4 className="pt-5 text-center mb-5">Products</h4>
      <div className="d-flex justify-content-center">
        <div className="mx-2">
          {" "}
          <MTNbtn />
        </div>
        <div className="mx-2">
          {" "}
          <LegalMobtn />
        </div>
        <div className="mx-2">
          <Trulancebtn />
        </div>
        <div className="mx-2">
          {" "}
          <Havenbtn />
        </div>
      </div>
    </>
  );
};

export default HomePage;
