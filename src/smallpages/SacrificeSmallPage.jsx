import SacrificeCard from "../cards/SacriceCard";
import sacrificeData from "../componentData/sacrificeData";
import { ThemeContext } from "../components/themeContext";
import { useContext } from "react";
import "/src/css/sacrifice.css";

function SacrificeSmallPage() {
  const context = useContext(ThemeContext);
  const renderSacrficeCard = sacrificeData.map((item) => (
    <SacrificeCard
      title={item.title}
      image={item.image}
      description={item.description}
    />
  ));
  return (
    <div className={`sacrificePage--small--${context.color}`}>
      <p>
        From a technical perspective, the term for the initial sacrifice to YHWH
        stems from the Hebrew word "ascend" (עלה). This verb, in its essence,
        signifies going up, rising, ascending, and even climbing. The prescribed
        method for offering this sacrifice to YHWH is through the act of burning
        with fire. As the flames consume the offering, the altar becomes veiled
        in smoke, which ascends towards the heavens as an offering for Elohim to
        accept. This is why it is described as a pleasing aroma to YHWH.
      </p>
      <div className={`sacrifice--paragraph--${context.color}`}></div>
      <div className="offering--pic"></div>
      <div className={`sacrifice--paragraph--${context.color}`}>
        <div className="left--sect">
          <img
            src="https://laymansbible.files.wordpress.com/2013/12/a-sacrifice-for-everything-sacrifice.jpg"
            alt=""
          />
        </div>
        <div className="right--sect">
          <h1>
            Ascension Offering to YHWH <br /> קרבן עולה ליהוה
          </h1>
          <div className="list--right">
            <h3>Preparation of the Sacrifice: </h3>
            <li>
              When a man from among the children of Israel brings a sacrifice to
              the Lord from animals (cattle or flock), it must be willingly
              offered.
            </li>
            <h3>Sacrifice of a Burnt Offering from Cattle:</h3>
            <li>
              If the sacrifice is a burnt offering from cattle, an unblemished
              male should be brought to the entrance of the Tent of Meeting
              before the Lord.
            </li>
            <li>
              The person offering the sacrifice should forcefully lean his hand
              upon the head of the burnt offering, which will be accepted to
              atone for him.
            </li>
            <li>
              The young bull should be slaughtered before the Lord, and the
              blood should be brought by Aaron's descendants, the kohanim, and
              dashed upon the altar around its entrance.
            </li>
            <li>
              The burnt offering should then be skinned and cut into its
              prescribed sections.
            </li>
            <h3>Arrangement and Offering on the Altar:</h3>
            <li>
              Aaron's descendants, the kohanim, should place fire on the altar
              and arrange wood on the fire.
            </li>
            <li>
              The pieces of the burnt offering, including the head and fat,
              should be arranged on top of the wood on the altar.
            </li>
            <li>
              The innards and legs of the burnt offering should be washed with
              water.
            </li>
            <li>
              The kohen should cause all of the animal to go up in smoke on the
              altar as a burnt offering, creating a pleasing fragrance to the
              Lord.
            </li>
            <h3>Sacrifice of a Burnt Offering from the Flock:</h3>
            <li>
              If the offering is brought from the flock (sheep or goats), an
              unblemished male should be sacrificed.
            </li>
            <li>
              It should be slaughtered on the northern side of the altar before
              the Lord, and its blood dashed upon the altar around.
            </li>
            <li>
              The animal should then be cut into its prescribed sections, with
              its head and fat arranged on top of the wood on the altar.
            </li>
            <li>
              The innards and legs should be washed with water, and the kohen
              should offer up all of the animal on the altar as a burnt
              offering.
            </li>
            <h3>Sacrifice of a Burnt Offering from Birds:</h3>
            <li>
              If the sacrifice to the Lord is a burnt offering from birds
              (turtle doves or young doves), it should be brought near to the
              altar.
            </li>
            <li>
              The kohen should nip off its head and cause it to go up in smoke
              on the altar, with its blood pressed out upon the wall of the
              altar.
            </li>
            <li>
              The crop and entrails should be removed, and the bird should be
              split open with its wing feathers intact.
            </li>
            <li>
              The kohen should then cause it to go up in smoke on the altar, on
              top of the wood on the fire.
            </li>
          </div>
        </div>
      </div>
      <div className="sacrifice--paragraph"></div>
      <div className={`sacrifice--paragraph--${context.color}`}>
        <div className="left--sect1">
          <h2>Thorah - Leviticus 2</h2>
          <h1>
            Grain Offering to YHWH <br /> קרבן מנחה ליהוה
          </h1>
          <div className="list--left">
            <h3>Prepare the Gift:</h3>
            <li>
              Prepare a gift to offer to YHWH consisting of fine flour, oil, and
              frankincense.
            </li>
            <h3>Present the Gift to the Priests:</h3>
            <li>Bring the gift to the children of Aharon, the priests.</li>
            <li>
              The kohen (priest) will take a fistful of the fine flour and oil,
              along with all the frankincense.
            </li>
            <h3>Offering the Memorial:</h3>
            <li>
              The kohen will cause the memorial of the offering to go up in
              smoke on the altar.
            </li>
            <li>
              This offering is a fire offering with a comforting fragrance to
              YHWH.
            </li>
            <li>
              Distribution of Remnants: The remnant from the grain is designated
              for Aharon and his sons. It is considered holy of holies from the
              fire of YHWH.
            </li>
            <h3>Types of Meal Offerings:</h3>
            <li>
              There are different types of meal offerings: Baked in an oven:
              Consists of unleavened loaves or unleavened wafers smeared with
              oil.
            </li>
            <li>
              On a pan: Made of fine flour mixed with oil and must be
              unleavened.
            </li>
            <li>In a deep pot: Made of fine flour with oil.</li>
            <h3>Preparation and Presentation:</h3>
            <li>Break the meal offering into pieces and pour oil over it.</li>
            <li>
              Bring the meal offering to YHWH, and the kohen will bring it close
              to the altar.
            </li>
            <h3>Offering the Memorial Again:</h3>
            <li>
              The kohen will lift out the memorial from the meal offering and
              cause it to go up in smoke on the altar.
            </li>
            <h3>Distribution of Remaining Offerings:</h3>
            <li>
              The remaining portion of the meal offering belongs to Aharon and
              his descendants.
            </li>
            <li>It is holy of holies from the fire offerings of YHWH.</li>
            <h3>Prohibitions and Requirements:</h3>
            <li>
              No leavened meal offering shall be sacrificed to YHWH. Leavening
              or honey is not to be burned as a fire offering to YHWH.
            </li>
            <li>
              However, leavened offerings should be brought as first-fruit
              offerings to YHWH, but they are not burned on the altar as a
              pleasing fragrance.
            </li>
            <h3>Salt Requirement:</h3>
            <li>
              Salt every meal offering sacrifice with salt. The salt of God's
              covenant should not be omitted from meal offerings. Salt should be
              offered on all sacrifices.
            </li>
            <h3>Offering of First Grains:</h3>
            <li>
              When bringing a meal offering of the first grains to YHWH, bring
              the first grain meal offering from barley, as soon as it ripens.
            </li>
            <li>
              Parch the grains over the fire, keeping the kernels full in their
              husks and ground into coarse meal.
            </li>
            <li>
              Put oil on it and place frankincense upon it. It is considered a
              meal offering.
            </li>
            <h3>Offering the Memorial for the First Grains:</h3>
            <li>
              The kohen shall cause the memorial of the first grain offering to
              go up in smoke, taken from its coarse meal, oil, and all its
              frankincense. It is a fire offering to YHWH.
            </li>
          </div>
        </div>
        <div className="right--sect2">
          <div className="sacrifice--grainimages">
            <img
              src="https://images.pexels.com/photos/6294381/pexels-photo-6294381.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
            <img
              src="https://images.pexels.com/photos/1600139/pexels-photo-1600139.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
            <img
              src="https://images.pexels.com/photos/6287581/pexels-photo-6287581.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className={`sacrifice--paragraph--${context.color}`}>
        <div className="left--sect">
          <div className="sacrifice--images">{renderSacrficeCard}</div>
        </div>
        <div className="right--sect">
          <h2>Thorah - Leviticus 3</h2>
          <h1>
            Peace offering to YHWH <br /> שלמים קרבן ליהוה
          </h1>
          <div className="list--right">
            <h3>Prepare the Sacrifice:</h3>
            <li>
              If the sacrifice is a peace offering brought from cattle (whether
              male or female), it must be unblemished.
            </li>
            <h3>Presentation and Slaughter:</h3>
            <li>Lean your hand forcefully upon the head of the sacrifice.</li>
            <li>
              Slaughter the animal at the entrance of the Tent of Meeting.
            </li>
            <li>
              Aaron's descendants (the kohanim) will dash the blood upon the
              altar, around it.
            </li>
            <h3>Preparation of the Fire Offering:</h3>
            <li>From the peace offering, bring a fire offering to YHWH.</li>
            <li>
              This offering includes the fat covering the innards and all the
              fat on the innards.
            </li>
            <h3>Additional Preparations:</h3>
            <li>
              Remove the two kidneys with the fat upon them, which is over the
              flanks.
            </li>
            <li>
              Remove the diaphragm with the liver, along with the kidneys.
            </li>
            <h3>Offering on the Altar:</h3>
            <li>
              Aaron's descendants shall cause it to go up in smoke on the altar,
              apart from the burnt offering.
            </li>
            <li>
              The offering is placed on top of the wood that is on the fire,
              creating a pleasing fragrance to YHWH.
            </li>
            <h3>Repeat Steps 2-5 for Flock Offerings:</h3>
            <li>
              If the sacrifice for a peace offering is from the flock (sheep or
              goat), repeat steps 2-5 accordingly.
            </li>
            <h3>Eternal Statute:</h3>
            <li>
              Remember that this is an eternal statute for all generations and
              dwelling places: You shall not eat any fat or any blood.
            </li>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SacrificeSmallPage;
