import React from "react";
import MTNLogo from "../../assets/images/mtnlogo.png";
import LegalMoLogo from "../../assets/images/legalmologo.png";
import TrulanceLogo from "../../assets/images/trulancelogo.png";
import HavenLogo from "../../assets/images/havenlogo.png";

const VendorCards = () => {
  return (
    <div className="container-fluid">
      <div className="row justify-content-evenly">
        <h4 className="pt-5 text-center mb-5">Explore the Marketplace</h4>
        <div className="col-lg-3 col-md-6 mt-3 mb-5 px-4 d-flex">
          <div className="cardBgg py-5">
            <div>
              {" "}
              <img
                src={MTNLogo}
                className="img-fluid mb-3"
                alt=""
                width={80}
                height={80}
              />
            </div>
            <div className="card-body pb-3 px-3 text-center">
              <p className="">
                Internet Access Service and Devices & Enterprise Business
                Solutions
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mt-3 mb-5 px-4 d-flex">
          <div className="cardBgg py-5">
            <img
              src={LegalMoLogo}
              className="img-fluid mb-3"
              alt=""
              width={80}
              height={80}
            />
            <div className="card-body pb-3 px-3 text-center">
              <p className="">Legal services when you need it</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mt-3 mb-5 px-4 d-flex">
          <div className="cardBgg py-5">
            <img
              src={TrulanceLogo}
              className="img-fluid mb-3"
              alt=""
              // width={60}
              // height={70}
            />
            <div className="card-body pb-3 px-3 text-center">
              <p className="">
                Software/Web Development, Content Creation and Digital Marketing
                Services
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mt-3 mb-5 px-4 d-flex">
          <div className="cardBgg py-5">
            <img
              src={HavenLogo}
              className="img-fluid mb-3"
              alt=""
              width={60}
              height={70}
            />
            <div className="card-body pb-3 px-3 text-center">
              <p className="">
                Tech and Art Instructors for Primary and Secondary Schools
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// const VendorCadss = () => {
//   return (
//     <>
//       <h4>Explore the Marketplace</h4>
//       <div className="vendor-cards">
//         <VendorCard
//           img={MTNLogo}
//           detail="Internet Access Service and Devices & Enterprise Business Solutions"
//         />
//         <VendorCard
//           img={LegalMoLogo}
//           detail="Legal services when you need it"
//         />
//         <VendorCard
//           img={TrulanceLogo}
//           detail="Software/Web Development, Content Creation and Digital Marketing Services"
//         />
//         <VendorCard img={img} detail={detail} />
//       </div>
//     </>
//   );
// };

// const VendorCad = ({ img, detail }) => {
//   return (
//     <section>
//       <img src={img} alt="" />
//       <p>{detail}</p>
//     </section>
//   );
// };
export default VendorCards;
