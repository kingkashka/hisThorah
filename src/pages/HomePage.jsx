import { useContext } from "react";
import { ThemeContext } from "/src/components/themeContext.jsx";
import HomeHeader from "../components/HomeHeader.jsx";
import Sidebar from "../components/Sidebar.jsx";

function HomePage() {
  const context = useContext(ThemeContext);
  return (
    <div>
    <HomeHeader />
      <div id="myHomePage" className={`homePage--${context.color} h-auto w-auto`}>
    {/* <Sidebar /> */}
        <h1 className="theName">יהוה</h1>
      </div>
    </div>
  );
}
export default HomePage;
