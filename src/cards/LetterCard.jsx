import React from "react";
import { useState, useEffect } from "react";
import { AiFillSound } from "react-icons/ai";
import { useContext } from "react";
import { ThemeContext } from "/src/components/themeContext.jsx";

function LetterCard(props) {
  const {label, title, number, description, original, picture} = props;
  const context = useContext(ThemeContext);
  const [isActive, setIsActive] = useState(false);

  function flipCard() {
    setIsActive((prevState) => !prevState);
  }

  return (
    <>
      <div className={`letterCard--container`}>
        <div
          className={`letterCard ${isActive ? "active" : ""}`}
          onClick={flipCard}
        >
          <div className={`letterCard--front--${context.color}`}>
            <label>{label}</label>
            <h2>{title}</h2>
            <h3>{number}</h3>
          </div>
          <div className={`letterCard--back--${context.color}`}>
            <label>{original}</label>
            <img src={picture} />
            <p>{description}</p>

            {/* <AiFillSound
              className={`letterCard--audio--${context.color}`}
              onClick={() => playSound()}
            /> */}
          </div>
        </div>
      </div>
    </>
  );
}
export default LetterCard;
