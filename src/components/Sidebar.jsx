import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import { ThemeContext } from "./themeContext";

function Sidebar({isOpen}) {
  const context = useContext(ThemeContext);
  return (
    <>
      <div id="mySidebar" className="sidebar">
        <ul>
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
            <Link className={`link--${context.color}`} to={"/sacrifices"}>
              Sacrifices
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
export default Sidebar;
