import React from "react";
import "bootstrap";
import logoIcon from "../assets/icons/logo.svg";
// import '../sassfiles/components/_footer.scss'
import SocialMediaIcons from "../assets/icons/sm-icon-footer.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="footerLeft">
            <img src={logoIcon} alt="" />
            <p>8th Gear Hub</p>
          </div>
          <div className="footerCentre">
            <div className="top-row">
              <div className="email-address">info@8thgearpartners.com</div>
              <div className="phone-one">0809 481 8883</div>
              <span className="divider">&#10072;</span>
              <div className="phone-two">0809 481 8882</div>
            </div>
            <hr className="horizontal-line" />
            <div className="socialmediaicons">
              <img src={SocialMediaIcons} alt="" />
            </div>
          </div>
          <div className="footerRight">
            <h5>SIGN UP FOR NEWSLETTER</h5>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
