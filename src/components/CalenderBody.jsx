import { useContext } from "react";
import { ThemeContext } from "./themeContext";

function CalenderBody() {
  const context = useContext(ThemeContext);
  return (
    <div className={`calenderBody--${context.color}`}>
      <h1>Understanding the Calender</h1>
      <h2>The New Year - ראש השנה</h2>
      <p>

      </p>
      <h2>Passover - פסח</h2>
      <p>

      </p>
      <h2>The Feast of Unleavened Bread - חג המצות</h2>
      <p>

      </p>
      
      <h2>Day of Rejoicing - יום תרועה</h2>
      <p></p>
      <h2>Day of Atonement - יום כפורים</h2>
      <p></p>
      <h2>Celebration of Succoth - חג הסוכות</h2>
      <h3>Day and night - יום ולילה</h3>
      <p>
        YHWH created the world in its entirety in six literal days and rested on
        the seventh. During these days of creation, we gain important details
        about the day and night cycle and how we are supposed to reckon time.
        YHWH’s calendar is based on the movement of the sun. According to a
        biblical understanding from Elohim, the sun, the moon, and the stars
        move around the earth, not the other way around as modern pseudo-science
        would have you believe. This is why they were created with the pure
        intention of indicating times and seasons. The sun is perfect in its
        movement above the earth and does not require a leap year to compensate
        for lost days. This necessity arises when using a lunar calendar based
        on the movement of the moon. The lunar year is 354 days long, which is
        too short for accurately reckoning the years. This system was adopted by
        ancient Israel during the Babylonian captivity, along with the concept
        that the day starts when the night starts. The Hebrew word for day,
        "יום" (yom), is synonymous with the word for light, "אור" (or). You
        cannot have one without the other, making them inseparable. In Genesis,
        when Elohim describes the days, He provides a detailed account of His
        work during the daylight period of the day-night cycle. As stated in
        Torah, Genesis 1:5: "And Elohim called the light Day (yom), and the
        darkness He called Night (layla). And there was evening, and there was
        morning—the first day." The question that arises is, if there are 24
        hours in a day, then where is the night? This complexity arises from
        using modern understandings to interpret the times and cycles of Elohim.
        What we notice here is that all work done in antiquity was carried out
        during the day while light shined upon the Earth. Once the sun set in
        the west—which is one of the meanings of the word "ערב" (erev), the
        other being a mix of day and night—the day was coming to an end, and it
        was time to rest. The rest period is night, where only dreams and
        visions come to us; other than this, we did not experience night in the
        way that we do in modern times. While there is a division of day and
        night, this division is further explained in multiple verses throughout
        the Torah, such as:
      </p>
    </div>
  );
}
export default CalenderBody;
