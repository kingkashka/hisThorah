import React from "react";

function BigSacrificeCard(props) {
  const { title, image, subTitle, description } = props;
  return (
    <div>
      <div className="1stCard">
        <h1>{title}</h1>
        <img src={image} alt="" />
      </div>
      <div className="2ndCard">
        <h3>{subTitle}</h3>
        <li>{description}</li>
      </div>
      <div className="3rdCard"></div>
    </div>
  );
}
export default BigSacrificeCard;
