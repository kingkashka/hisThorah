import "/src/css/language.css";
import LanguageHeader from "../components/LanguageHeader.jsx";
import letterData from "../componentData/letterData.js";
import LetterCard from "../cards/LetterCard.jsx";
import { useContext } from "react";
import { ThemeContext } from "/src/components/themeContext.jsx";
import Sidebar from "../components/Sidebar.jsx";

function LanguageSmallPage() {
  const context = useContext(ThemeContext);
  const renderLetterCard = letterData.map((item) => (
    <LetterCard
      label={item.label}
      original={item.original}
      image={item.image}
      title={item.title}
      picture={item.picture}
      description={item.description}
      number={item.number}
    />
  ));
  
  return (
    <div className={`bigLanguage--page--${context.color}`}>
      <div className={`language--page--${context.color}`}>
        <LanguageHeader />
        {renderLetterCard}
      </div>
    </div>
  );
}
export default LanguageSmallPage;
