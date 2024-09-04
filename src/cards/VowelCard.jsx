import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { ThemeContext } from "../components/themeContext";

function VowelCard(props) {
  const { title, info, sound } = props;
  const context = useContext(ThemeContext)
  const [showVowel, setShowVowel] = useState(true)  
  console.log(context);
  return (
      <div className={`VCard--front--${context.color}`}>
        <div className={`VCard--title--${context.color}`}>
        <h1>{title}</h1>
        </div>
        <div className={`VCard--info--${context.color}`}>
        <p>{info}</p>
        </div>
        <div className={`VCard--base--${context.color}`}>
        <h3>{sound}</h3>
        </div>
    </div>
  );
}
export default VowelCard;
