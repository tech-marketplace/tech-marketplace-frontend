import Hero from "../assets/images/hero-image.png";
import { BuyNowBtn, SellBtn } from "./Buttons/actionBtn";

export const HomeHero = () => {
  return (
    <div className="container-fluid">
      <div className="row align-items-center justify-content-center px-4 py-5">
        <div className="col-lg-6 col-md-7 col-sm-12 pt-3">
          <h2 className=" d-none d-lg-block d-md-none d-sm-none d-xs-none">
            Accelerate your Business Transformation with Portfolio Tech
            Solutions
          </h2>
          <h3 className=" d-xs-block d-sm-block d-md-block d-lg-none">
            Accelerate your Business Transformation with Portfolio Tech
            Solutions
          </h3>
          <p className="mt-4">
            We offer a comprehensive suite of Tech Solutions tailored to drive
            seamless digital transformation in your business.
          </p>
          <div className="d-flex">
            <div>
              <BuyNowBtn />
            </div>
            <div className="ms-3">
              <SellBtn />
            </div>
          </div>
        </div>
        <div className="col-lg-5 col-md-5 col-sm-12">
          <img
            src={Hero}
            className="d-block mx-lg-auto img-fluid"
            alt=""
            loading=""
          />
        </div>
      </div>
    </div>
  );
};
