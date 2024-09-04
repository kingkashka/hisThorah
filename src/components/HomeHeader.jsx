import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "/src/components/themeContext.jsx";
import Button from "/src/components/Button.jsx";

function HomeHeader() {
  const context = useContext(ThemeContext);
  const [toggle, setToggle] = React.useState(true);

  // function openNav() {
  //   document.getElementById("mySidebar").style.width = "220px";
  // }
  // function closeNav() {
  //   document.getElementById("mySidebar").style.width = "0";
  // }
  // function openCloseNav() {
  //   setToggle((prevState) => !prevState);
  //   if (!toggle) {
  //     closeNav();
  //   } else {
  //     openNav();
  //   }
  // }

  return (
    <div className={`navbar--container--${context.color} col-sm-`}>
      <div className="headerleft--box">
        <Link className={`home--link--${context.color}`} to={"/"}>
          יהוה
        </Link>
      </div>
      <ul>
        {/* <li>Laws
        <ul className="submenu">
          <li>
          <Link className={`link--${context.color}`} to={"/leviticus11"}>
            Kosher
          </Link> 
          </li>
        </ul>   
        </li> */}
        <li>
          <Link className={`link--${context.color}`} to={"/leviticus11"}>
            Kosher
          </Link>
        </li>
        <li>
          <Link className={`link--${context.color}`} to={"/language"}>
            Language
          </Link>
        </li>
        <li>
          <Link className={`link--${context.color}`} to={"/DNA"}>
            DNA
          </Link>
        </li>
        {/* <li>
          <Link className={`link--${context.color}`} to={"/sacrifices"}>
            Sacrifices
          </Link>
        </li> */}
        <li>
          <Link className={`link--${context.color}`} to={"/calendar"}>
            Calendar
          </Link>
        </li>
        <div>
          <Button />
        </div>
      </ul>
    </div>
  );
}
export default HomeHeader;
