import DNACard from "../cards/DNACard";
import DNAHaploCard from "../cards/DNAHaploCard";
import { useContext } from "react";
import { ThemeContext } from "/src/components/themeContext.jsx";
import "/src/css/DNA.css";
import { color } from "d3";

function DNAHeader() {
  const context = useContext(ThemeContext);
  const DNAHaploData = [
    {
      title: "Cham",
      label: "Haplogroup: AB (YAP-)",
      image:
        "https://cdn.theatlantic.com/media/img/photo/2011/07/south-sudan-the-newest-nation-in-the-world/s01_RTR2OHGH/main_1200.jpg",
      info: `Haplogroups A and B represent true African lineages, originating and remaining primarily in Africa. These haplogroups are predominantly found within the continent and are rare outside Africa, underscoring their deep genetic roots. They are distributed among diverse populations, with notable concentrations in Southern, East, and Central Africa. Haplogroup A is notably present among the Khoisan people of Southern Africa, including the San and Khoikhoi. Various Nilotic and Cushitic-speaking groups in East Africa also carry haplogroup A, as do some Pygmy populations in Central Africa, including those in the Congo Basin. These haplogroups have the least amount of Neanderthal genetic material compared to non-African haplogroups. This could be speculated by saying that Cham's lineage had the least amount of Nephilim (Neanderthal) DNA admixture of the three brothers. With Yapheth having the most Neanderthal admixture`,
    },
    {
      title: "Shem",
      label: "Haplogroup: DE (YAP+)",
      image:
        "https://cdn.aarp.net/content/dam/aarp/research/surveys_statistics/life-leisure/2021/black-man-hat.jpg",
      info: "Haplogroup DE is a pivotal branch of the human paternal lineage, characterized by the YAP (Y Alu Polymorphic) insertion, a unique genetic marker that defines this haplogroup as YAP positive. Haplogroup DE provides essential insights into early human migrations and genetic diversification. Haplogroup D is found primarily in East Asia, Central Asia, and the Andaman Islands, with notable regions including Japan, Tibet, and parts of Southeast Asia. Haplogroup E is predominantly found in Africa, most notably associated with the Bantu expansion and the Trans-Atlantic slave trade, which has displaced many individuals carrying this haplogroup to the Americas. This haplogroup also includes significant branches in Europe and the Middle East. The presence of the YAP insertion and the widespread geographical distribution of its descendants underscore the importance of haplogroup DE in understanding the genetic history and evolution of modern human populations.",
    },
    {
      title: "Yapheth",
      label: "Haplogroup: CF (YAP-)",
      image:
        "https://media.istockphoto.com/id/1392528328/photo/portrait-of-smiling-handsome-man-in-white-t-shirt-standing-with-crossed-arms.webp?b=1&s=170667a&w=0&k=20&c=1VLP56VSuFBdjE-ioEuLEbOO-UIUGBnISnOjjymsB8s=",
      info: `As it is written in Thorah-Genesis 9:27 "Elohim he shall enlarge Yapheth, and he shall dwell in the tents of Shem; and Canaan shall be his servant." Haplogroup CF is a foundational branch of the human paternal lineage, marked by the P143 mutation. It is a precursor to the widely dispersed haplogroups C and F. Haplogroup F, in particular, is a significant ancestor to a vast number of subsequent haplogroups, including G, H, I, J, K, and their descendants. These haplogroups are found across the globe, illustrating the extensive migratory routes and genetic diversification of early humans. The study of haplogroup CF and its subclades provides valuable insights into the ancient migrations and the evolutionary history of modern human populations. The widespread distribution and genetic diversity of haplogroup F’s descendants underscore its crucial role in the paternal lineage of modern humans who are descendants of yapheth.`,
    },
  ];
  const renderDNAHaploCard = DNAHaploData.map((data) => (
    <DNAHaploCard
      image={data.image}
      title={data.title}
      label={data.label}
      info={data.info}
    />
  ));
  return (
    <div className={`DNAHeader--${context.color} col-sm- h-auto w-auto`}>
      <h1>The Holy Seed - זרע הקודש</h1>
      <div className="bigFloodContainer">
        <div className="theFloodContainer">
          <img
            className="theFlood"
            src="/images/DNA images/ai-generated-8452637_1280.webp"
            alt="https://cdn.pixabay.com/photo/2023/12/16/14/56/ai-generated-8452637_1280.png"
          />
        </div>
      </div>
      <div className="floodParagraph">
        <h3>The Flood - המבול</h3>
        <p>
          During the time of Noach, YHWH-יהוה destroyed all life on Earth,
          eradicating all existing lineages. However, Noach found grace in the
          eyes of Elohim and was instructed to build an ark ("תבה") to preserve
          life. This ark protected Noach, his wife, his three sons, their wives,
          seven pairs of all clean animals, and pairs of all unclean animals.
          This was necessary due to the extermination that occurred on Earth.
          The flood did not affect just one region but destroyed life across the
          entire Earth. As a sign, Elohim made a covenant between Himself, the
          Earth, people, and all living creatures to never again flood the Earth
          to destroy all flesh, represented through the visual of what we know
          today as the rainbow. 
          <br />As it is written <em>"I do set my bow in the
          cloud, and it shall be for a sign of the covenant between me and the
          earth. And it shall come to pass, when I bring a cloud over the earth,
          that the bow shall be seen in the cloud. And I will remember my
          covenant, which is between me and you and every living creature of all
          flesh; and the waters shall no more become a flood to destroy all
          flesh."</em> 
          <footer>
          - Thorah <cite>Genesis 9:13-15</cite>
          </footer>Hence the rainbow
          visuals in the image above.
        </p>
        <p>
          In restarting civilization and repopulating the land, Elohim allowed
          the nations of the world today to descend directly from Noach and his
          three sons. This narrative underscores the belief that, like all
          nations today, the set-apart seed of Israel can be traced back to a
          single lineage. Understanding these lineages and their origins through
          DNA can help recognize the descent and heritage of the people of
          Israel. This is supported by the Thorah in the book of Numbers, which
          states, 
          <br />
          <em>
            "And all the congregation assembled on the first of the second
            month, and they established their genealogy according to their
            families by the house of their fathers, by the number of names from
            age twenty years and above."
          </em> 
          <footer>
          - Thorah <cite>Numbers 1:18</cite>
          </footer>
          This is an important detail
          because it highlights the recounting of households by the fathers.
        </p>
        <p>
          By recounting the lineage based on the fathers, which is contrary to
          modern Judaism that believes the seed-line is determined by the
          mother's lineage, this concept has no foundation in the Thorah. The
          latter directly correlates with scientific findings regarding the Y
          haplogroup, which is passed down through the paternal line—exclusively
          from father to son. Hence the phrase "like father, like son." This
          unbroken chain through generations serves as a crucial tool provided
          by YHWH-יהוה, allowing us to trace our lineage and determine the
          nation from which our forefathers descend. Today, our focus is on
          deducing the biblical family tree lineage, particularly the lineage of
          Israel as outlined in the Thorah, and understanding how it corresponds
          to contemporary haplogroups.
        </p>
      </div>

      <div className="DNACard--Container">
        <div className={`containerOne--${context.color}`}>
          <h3>Inheriting DNA</h3>
          <img
            src="https://i2.wp.com/nebula.org/blog/wp-content/uploads/2020/04/Screen-Shot-2020-04-01-at-3.18.16-PM-1024x607.png"
            alt=""
          />
        </div>
        <div className="DNA--Card">
          <h2>Mitochondrial DNA</h2>
          <img
            className={`chromosome--${context.color}`}
            src="https://www.meresearch.org.uk/wp-content/uploads/2021/06/Mitochondria-1500x800.jpg"
            alt=""
          />
          <div className="chromosomeFacts">
            <ul>
              <li>
                Inheritance: mtDNA is inherited exclusively from the mother,
                with each individual receiving a copy from their mother, who
                received it from her own mother, continuing along an unbroken
                maternal line.
              </li>
              <li>
                Genetic Markers: Small mutations or "typos" occasionally occur
                in the mtDNA sequence, creating new genetic variants. Over
                generations, these variants accumulate, forming unique patterns
                that identify different maternal lines.
              </li>
              <li>
                Population Genetics: The unique patterns of genetic variants in
                mtDNA allow researchers to trace maternal lineages and study the
                evolutionary history and migration patterns of populations
                across the world.
              </li>
            </ul>
          </div>
        </div>
        {/* <FaPlus className="plusSign" /> */}
        <div className="DNA--Card">
          <h2>Y Chromosome DNA</h2>
          <img
            className={`chromosome--${context.color}`}
            src="https://www.nih.gov/sites/default/files/news-events/research-matters/2023/20230711-y.jpg"
            alt=""
          />
          <div className="chromosomeFacts">
            <ul>
              <li>
                Inheritance: Y haplogroups are passed from father to son and
                remain relatively unchanged through generations, making them
                useful for tracing paternal lineage.
              </li>
              <li>
                Genetic Markers: The classification of Y haplogroups is based on
                mutations called single nucleotide polymorphisms (SNPs) on the Y
                chromosome.
              </li>
              <li>
                Population Genetics: Y haplogroups can provide insights into
                human migration patterns, ancient populations, and human genetic
                development.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="DNABase--Paragraph">
        <h3>Out of Africa Theory Debunked</h3>
        <p>
          The Out of Africa theory, also known as the Recent African Origin
          (RAO) model, is a widely accepted explanation in anthropology and
          genetics that describes the origin and dispersal of modern humans
          (Homo sapiens) from Africa to populate the rest of the world.
          According to this theory, anatomically modern humans originated in
          Africa around 200,000 years ago.
        </p>
        <p>
          However, from a biblical perspective, the world is not 200,000 years
          old and all present-day humans are descendants of Noach and his three
          sons. Scientifically, this is echoed in the breakdown of different
          Y-chromosome haplogroups, which cannot independently give rise to each
          other. Each haplogroup, such as AB, DE, and CF, is distinct and has
          its own unique characteristics and specific genetic markers. For
          instance, haplogroups A and B share a common ancestor in the BT
          haplogroup but cannot produce haplogroups DE and CF. Similarly,
          haplogroups DE and CF are genetically distinct and cannot generate
          haplogroups A or B. This genetic diversity aligns with the biblical
          narrative of three primary lineages descending from Noach's three
          sons, forming distinct groups that populated various regions of the
          world.
        </p>
        <p>
          In summary, while the Out of Africa theory explains the global
          dispersion of modern humans from Africa based on genetic evidence, it
          does not account for the genetic distinctness of haplogroups DE and
          CF, which cannot be derived from one another or from haplogroups A and
          B, as modern science would lead you to believe. In contrast, the
          biblical account emphasizes a common ancestry from Noach and his sons.
          This perspective is supported by the distinct genetic lineages
          observed in scientific studies, where each haplogroup has unique
          characteristics and cannot independently give rise to others.
        </p>
      </div>
      <div className="HaploContainer">
        <div className="h3Container">
          <h3>Sons of Noach - בני נוח</h3>
        </div>
        <div className="smallHaploContainer">{renderDNAHaploCard}</div>
        <div className={`disclaimer--${context.color}`}>
          <h3>
            *Disclaimer: These images do not represent all subclades of these
            haplogroups.*
          </h3>
        </div>
      </div>
      <div className={`theFamilyTree--${context.color}`}>
        <h1>The Family Tree - עץ המשפחה</h1>
        <p>
          This phylogenetic tree depicts the breakdown of haplogroups in today's
          population. Claims regarding the lineage of Israel are not based on
          fallacies or hypotheticals. The most logical approach is to analyze
          each contemporary haplogroup, comparing and contrasting them to
          identify which one aligns with the historical curses that were
          foretold. These curses do not miss their mark, affecting the survivors
          of the Trans-Atlantic and Trans-Saharan slave trade whose ancestors
          and descendants are now scattered across the Earth. These individuals
          have endured the loss of heritage, language, and customs, often
          marginalized in every society they have been dispersed to, as outlined
          in Deuteronomy chapter 28 of the Thorah. It is not my position to tell
          other people who they are and who they descend from, but with the help
          of YHWH-יהוה, we can all use the tools of DNA and historical proof to
          come closer to recognizing who we are. Bless His name forever and
          always, YHWH-יהוה.
        </p>
        <div className={`disclaimer--${context.color}`}>
          <h3>
            *Disclaimer: If entire graph is not visible switch to desktop mode.*
          </h3>
        </div>
      </div>
    </div>
  );
}
export default DNAHeader;
