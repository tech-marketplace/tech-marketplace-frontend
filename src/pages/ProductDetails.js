import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductCards from "../components/Cards/ProductCards";
import ProductPicture from "../assets/images/productheroimage.png";
import Minusbtn from "../components/Buttons/Actionbtns/Minusbtn";
import Plusbtn from "../components/Buttons/Actionbtns/Plusbtn";
// import AddToCartbtn from "../components/Buttons/Actionbtns/AddToCartbtn";
import { BuyNowBtn, AddToCartbtn } from "../components/Buttons/actionBtn";
// import '../sassfiles/pages/_productdetails.scss'

function ProductDetails() {
  return (
    <div>
      <Navbar />
      <div className="d-flex align-items-center">
        <div className="">
          <img src={ProductPicture} alt="" />
        </div>
        <div className="r">
          <h4>Ecommerce Application</h4>
          <p>
            Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum
            dolor sit amet.
            <ul>
              <li>Lorem ipsum dolor sit amet Lorem ipsum</li>
              <li>Lorem ipsum dolor sit amet Lorem ipsum</li>
              <li>Lorem ipsum dolor sit amet Lorem ipsum</li>
              <li>Lorem ipsum dolor sit amet Lorem ipsum</li>
            </ul>
            <h5>N500,000</h5>
          </p>
          <Minusbtn /> 1 <Plusbtn />
          <div className="mt-4">
            <AddToCartbtn />
            <BuyNowBtn />
          </div>
          <Link to="/">Continue shopping</Link>
        </div>
      </div>
      <div className="ms-5">
        <h4>Related products</h4>
        <ProductCards />
      </div>
    </div>
  );
}

export default ProductDetails;
