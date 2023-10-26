import React from "react";
import ChooseUsIcon from "../../assets/images/choose-us-icon.png";
// import '../../sassfiles/components/_cards.scss'

const img = ChooseUsIcon;
const title = "Extensive Solution Portfolio";
const detail =
  "Access a wide range of tech solutions tailored to your business needs.";

function WhyChooseUsCards() {
  return (
    <>
      <div className="why-choose-us-cards">
        <WhyChooseUsCard img={img} title={title} detail={detail} />
        <WhyChooseUsCard
          img={img}
          title="Trusted Partnerships"
          detail="Collaborate with top industry providers for reliable and innovative solutions."
        />
        <WhyChooseUsCard
          img={img}
          title="Seamless Integration"
          detail="Effortlessly integrate our solutions into your existing infrastructure for enhanced efficiency."
        />
        <WhyChooseUsCard
          img={img}
          title="Scalable Solutions for Growth"
          detail="Our solutions are designed to scale seamlessly, empowering your business to grow and expand"
        />
        <WhyChooseUsCard
          img={img}
          title="Customer Satisfaction"
          detail="We prioritize your satisfaction and value long-term relationships built on trust, reliability, and exceptional service"
        />
        <WhyChooseUsCard
          img={img}
          title="Expert Support"
          detail="Benefit from our dedicated team's expertise and guidance throughout your transformation journey."
        />
      </div>
    </>
  );
}

const WhyChooseUsCard = ({ img, detail }) => {
  return (
    <div>
      <img src={img} alt="" />
      <h2>{title}</h2>
      <p>{detail}</p>
    </div>
  );
};
export default WhyChooseUsCards;
