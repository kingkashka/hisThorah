import { useContext } from "react";
import VowelCard from "../cards/VowelCard";
import vowelCardData from "../componentData/vowelCardData";
import { ThemeContext } from "./themeContext";
function LanguageHeader(props) {
  const context = useContext(ThemeContext);
  const renderVowelCard = vowelCardData.map((vowelData) => (
    <VowelCard
      title={vowelData.title}
      info={vowelData.info}
      sound={vowelData.sound}
    />
  ));
  return (
    <div className={`language--header--${context.color}`}>
      <h1>The Hebrew Language - השפה העברית</h1>
      <p>
        The Hebrew language holds a unique and sacred status. It stands as the
        only language known to have been spoken directly between YHWH - יהוה and
        the prophets. Elohim, the sole creator of all existence, including every
        known language in history, imbues Hebrew with unparalleled significance.
        Just as Elohim is set apart in all His being and actions, so too is the
        Hebrew language. As His people, we are destined to be set apart like
        Him, and one of the foundational steps in this journey is gaining an
        understanding of this sacred language.
      </p>
      <h3>Yiddish & Ladino</h3>
      <p>
        There's a misconception that modern Hebrew is merely a blend of Yiddish
        and Ladino, but this is not accurate. Hebrew, once lost in time
        according to the curses outlined in the Torah, has seen a miraculous
        resurgence. Despite being scattered among the nations and diminished in
        number, we were blessed with the opportunity to rediscover and preserve
        our language and heritage. In the late 19th and early 20th centuries,
        Hebrew experienced a remarkable revival, culminating in the
        establishment of Modern Hebrew as the official language of Israel. This
        revival allowed us to reclaim our linguistic roots and identity. Ladino
        is a Romance language that evolved from medieval Spanish, enriched with
        influences from Hebrew, Arabic, Turkish, and other languages. It emerged
        among Sephardic Jewish converts who were expelled from Spain in 1492 and
        subsequently settled in various regions, notably the Ottoman Empire.
        Yiddish, on the other hand, is a High German language with influences
        from Hebrew and Slavic tongues. It originated during the medieval era
        and flourished as a distinct language spoken by Ashkenazi Jewish
        converts primarily in Eastern Europe. Over time, it became a vital
        aspect of Jewish communities in Central and Eastern Europe, and later,
        in other parts of the world.
      </p>
      <h1>Our Understanding</h1>
      <p>
        Modern Hebrew is written from right to left using a script that consists
        of 22 letters, all consonants. Vowels are represented using diacritic
        marks called "nikkud" or are implied by context.
        <br />
        Hebrew in antiquity was written without "nikkud" vowel points in a
        system referred to as "matris lectionis". "Matres lectionis" is a Latin
        term that translates to "mothers of reading" or "mothers of
        pronunciation." In the context of the Hebrew language, it refers to
        certain consonant letters that were used to indicate vowel sounds if not
        positioned as the first letter of a word. These letters are the "aleph",
        "waw", "yod".
      </p>
      <h1>Vowels</h1>
      <div className="Vowel--container">{renderVowelCard}</div>
      <div className="other-content">
        <p>
          The use of matres lectionis became less standardized over time,
          particularly during the development of the Masoretic text, which added
          vowel diacritics (nikkud) to Hebrew script. However, even in modern
          Hebrew, matres lectionis are still employed to some extent, though
          they are not always explicitly marked. This understanding helps us
          better understand the true pronunciation of biblical areas, places,
          names and most importantly the most holiest name in our history YHWH -
          יהוה.
          <br />
          We also do not see the importance or necessity of the holy language
          having more than one sound for a single letter. Shin (שׁ): The letter
          shin typically represented a sibilant consonant sound. In ancient
          Hebrew, it was likely pronounced as a voiceless postalveolar
          fricative, similar to the "sh" sound in English words like "shoe" or
          "ship." The placement of the dot above to the right or to the left
          above the letter distinguishes between the "shin" sound (שׁ) and the
          "sin" sound (שׂ), In modern Hebrew the "sin" is pronounced exactly
          like the Samekh. Samekh (ס): The letter samekh represented a different
          consonantal sound. It is typically pronounced as a voiceless alveolar
          fricative, similar to the "s" sound in English words like "sit" or
          "see." We can find through historical context where there became
          confusion of pronunciation between these letters in the book of Judges.
          <br />
            <em>
            "Then said they unto him, Say now Shibboleth (שִׁבֹּ֜לֶת): and he
            said Sibboleth (סִבֹּ֗לֶת): for he could not frame to pronounce it
            right. Then they took him, and slew him at the passages of Jordan:
            and there fell at that time of the Ephraimites forty and two
            thousand."
            </em>
          <footer>
            - Prophets <cite>Judges 12:6</cite>
          </footer>
          <br />
          This is also the case for letters "tet" and "Thaw". The use of the
          true Thaw has been lost in modern hebrew and does not exist by
          mainstream standards. In ancient Hebrew, the letter "thaw" (ת) is
          generally believed to have been pronounced as a voiceless dental
          fricative, which is represented in English by the "th" sound, as in
          the word "thin" or "thick." This pronunciation is indeed different
          from the sound of the letter "tet" (ט), which is often pronounced as a
          voiceless alveolar plosive, similar to the English "t" sound. The
          distinction between the "tet" and "Thaw" sounds reflects the phonetic
          diversity present in ancient Hebrew and other Shemitic languages. Each
          letter in the Hebrew alphabet represented a distinct phoneme, and the
          differences in pronunciation between letters allowed for a richer and
          more nuanced expression of speech.
        </p>
        <h1>The signs - האותות</h1>
        <p>
          The 22 letters used in Hebrew are derived from the word "אות" (Oath),
          meaning "sign" in Hebrew. From a biblical perspective, oaths are
          tangible manifestations of understanding. For instance, in the book of
          Genesis, Elohim declares that the sun and the moon would be for
          "אותות" (signs), indicating literal physical representations serving
          as signs for us. This suggests that each letter of the Hebrew
          alphabet, collectively known as "the aleph-bet," carries a sacred
          individual identity associated with its form.
        </p>
      </div>
    </div>
  );
}
export default LanguageHeader;
