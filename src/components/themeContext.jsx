import React, { useState, createContext } from "react";
import { FaMoon } from "react-icons/fa";
import { BsSunFill } from "react-icons/bs";
const ThemeContext = React.createContext();

function ThemeContextProvider(props) {
  const [color, setColor] = React.useState("light");
  
  const toggleTheme = () => {
    setColor((prevColor) => (prevColor === "light" ? "dark" : "light"));
  };
  const toggleIcon = () => {
    setColor((prevColor) =>
      prevColor === "light" ? <BsSunFill /> : <FaMoon />
    );
  };

  return (
    <ThemeContext.Provider
      value={{
        color: color,
        toggleTheme: toggleTheme,
        toggleIcon: toggleIcon,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
}

export { ThemeContext, ThemeContextProvider };
