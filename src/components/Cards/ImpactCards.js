import React from "react";
import ImpactIcon from "../../assets/images/solutionsicon.png";
// import '../../sassfiles/components/_cards.scss'

const img = ImpactIcon;
const figure = "10";
const object = "Solutions";

function ImpactCards() {
  return (
    <>
      <header>
        <h1>Our Impact</h1>
      </header>
      <div className="impact-cards">
        <ImpactCard img={img} figure={figure} object={object} />
        <ImpactCard img={img} figure={figure} object={object} />
        <ImpactCard img={img} figure={figure} object={object} />
        <ImpactCard img={img} figure={figure} object={object} />
      </div>
    </>
  );
}

const ImpactCard = ({ img, figure, object }) => {
  return (
    <div className="impact-card">
      <div className="impact-image">
        <img src={img} alt="" className="i-image" />
      </div>
      <h1>{figure}</h1>
      <h3>{object}</h3>
    </div>
  );
};

export default ImpactCards;
