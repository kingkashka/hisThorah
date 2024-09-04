import React, { useContext } from "react";
import { FaRegLightbulb } from "react-icons/fa";
import { ThemeContext } from "./themeContext.jsx";
import { FaMoon } from "react-icons/fa";
import { IoMoonSharp } from "react-icons/io5";
import { MdSunny } from "react-icons/md";

function Button(props) {
  const context = useContext(ThemeContext);
  console.log(context.toggleIcon);

  return (
    <div className="icon--box">
        <FaRegLightbulb
          onClick={context.toggleTheme}
          className={`icon-${context.color}`}
        /> 
    </div>
  );
}
export default Button;
