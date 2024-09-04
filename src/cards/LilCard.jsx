import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../components/themeContext";

function LilCard(props) {
  const context = useContext(ThemeContext)
  const [toggle, setToggle] = React.useState(true);
  function display() {
    setToggle((prevState) => !prevState);
  }

  return (
    <div onClick={display} className={`Lilcard--${context.color}`}>
      <img className="Lilcard--image" src={props.image} alt="" />
      <h2>{toggle ? props.title : props.transliteration}</h2>
      <label>{props.label}</label>
    </div>
  );
}
export default LilCard;
