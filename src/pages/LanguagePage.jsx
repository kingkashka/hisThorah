import "/src/css/language.css";
import LanguageSmallPage from "../smallpages/LanguageSmallPage.jsx";
import HomeHeader from "../components/HomeHeader.jsx";
import Sidebar from "../components/Sidebar.jsx";
import Footer from "../components/Footer.jsx";

function Language(props) {
  
  return (
    <>
    <HomeHeader/>
    <LanguageSmallPage />
    </>
  );
}

export default Language;
