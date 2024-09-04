import "/src/css/sacrifice.css"
import { useContext } from "react";
import { ThemeContext } from "./themeContext";
function SacrificeHeader() {
  const context = useContext(ThemeContext)
  return (
    <div className={`sacrifice--header--${context.color}`}>
      <h1>Sacrifices to יהוה</h1>
      <p>
        The Book of Leviticus provides intricate instructions on conducting
        Levitical priestly sacrifices for atonement from sin. These rituals were
        prescribed to be performed whenever and wherever The Elohim (YHWH) chose
        to place his name among his people. Understanding these sacrifices down
        to the minutest details is considered beneficial for our spiritual
        growth and comprehension of ancient religious practices. By delving into
        the specifics outlined in Leviticus, we gain insight into the
        significance of these sacrificial rituals and their role in fostering a
        deeper connection with the divine. Each detail serves a purpose,
        reflecting the reverence and meticulousness required in approaching
        matters of spiritual cleansing and reconciliation. In studying these
        instructions, we not only honor our religious heritage but also deepen
        our understanding of the profound relationship between humanity and the
        divine. Through this exploration, we seek wisdom and guidance in our
        spiritual journey, striving to uphold the principles of faith and
        devotion passed down through generations. Therefore, it is paramount for
        believers to engage with the Book of Leviticus with diligence and
        reverence, recognizing its timeless significance and relevance in
        shaping our spiritual lives.
      </p>
    </div>
  );
}
export default SacrificeHeader;
