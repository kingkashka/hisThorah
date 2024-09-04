import { useContext } from "react";
import { ThemeContext } from "/src/components/themeContext.jsx";

function DNAHaploCard(props) {
  const { label, title, image, info } = props;
  const context = useContext(ThemeContext);

  return (
    <>
      <div className={`DNACard--${context.color}`}>
        <div className={`haploTitle--${context.color}`}>
          <h2>{title}</h2>
          <label>{label}</label>
        </div>
        <div className={`haploInfo--${context.color}`}>
          <p>{info}</p>
        </div>
        <div className={`divider--${context.color}`}></div>
        <div className={`haploImage--${context.color}`}>
          <img className={`haploFaces--${context.color}`} src={image} alt="" />
        </div>
      </div>
    </>
  );
}
export default DNAHaploCard;
