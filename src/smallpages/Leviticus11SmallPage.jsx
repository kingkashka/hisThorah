import "/src/css/Kosher.css";
import React from "react";
import KosherHeader from "../components/KosherHeader.jsx";
import BeastHeader from "/src/components/BeastHeader.jsx";
import FlyerHeader from "../components/FlyerHeader.jsx";
import CreeperHeader from "/src/components/CreeperHeader.jsx";
import OnFourAnimals from "../components/onFour.jsx";
import Card from "../cards/Card.jsx";
import LilCard from "../cards/LilCard.jsx";
import beastData from "../componentData/beastCardData.js";
import flyerCardData from "../componentData/flyerCardData.js";
import creeperData from "../componentData/creepersCardData.js";
import creeperOnFoursData from "../componentData/creepersOnEarth.js";
import { useContext } from "react";
import { ThemeContext } from "/src/components/themeContext.jsx";

function Leviticus11SmallPage() {
  const context = useContext(ThemeContext);

  const renderFlyerCard = flyerCardData.map((animal) => (
    <LilCard
      image={animal.image}
      title={animal.title}
      label={animal.label}
      transliteration={animal.transliteration}
    />
  ));
  const renderBeastCard = beastData.map((animal) => (
    <Card
      image={animal.image}
      title={animal.title}
      description={animal.description}
      label={animal.label}
    />
  ));
  const renderCreeperCard = creeperData.map((animal) => (
    <LilCard
      image={animal.image}
      title={animal.title}
      label={animal.label}
      transliteration={animal.transliteration}
    />
  ));
  const renderCreeperOnFourCard = creeperOnFoursData.map((animal) => (
    <LilCard
      image={animal.image}
      title={animal.title}
      label={animal.label}
      transliteration={animal.transliteration}
    />
  ));

  return (
    <div  className={`kosher--page--${context.color} col-sm-`}>
      <div className={`uncleanAnimals--page--${context.color} col-sm-`}>
        <KosherHeader />
        <BeastHeader />
        <div className="card--container col-sm-">{renderBeastCard}</div>
        <FlyerHeader />
        <div className="lilCardContainer col-sm-">{renderFlyerCard}</div>
        <CreeperHeader />
        <div className="creeperCardContainer col-sm-">{renderCreeperCard}</div>
        <OnFourAnimals />
        <div className="lilCardContainer col-sm-">{renderCreeperOnFourCard}</div>
      </div>
    </div>
  );
}
export default Leviticus11SmallPage;
