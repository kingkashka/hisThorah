import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { ThemeContext } from "../components/themeContext"; 

function Card(props) {
  const { image, description, label, title, _id } = props;
  const [isActive, setIsActive] = useState(false)
  const context = useContext(ThemeContext)

  function flipCard(){
    setIsActive(prevState => !prevState)
  }
  return (
    <>
      <div className={`card--${context.color} ${isActive ? "slide" : ""}`} onClick={flipCard}>
        <img className="card--image" src={image} alt="" />
        <p>{description}</p>
        <label>{label}</label>
        <h2>{title}</h2>
      </div>
    </>
  );
}
export default Card;
