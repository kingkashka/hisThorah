import { color } from "d3";
import { Children } from "react";

const DNAData = {
  name: "Noach - נוח",
  mutation: "",
  color: "#a6cca3",
  children: [
    {
      name: "Cham - חם",
      mutation: "A/B (YAP-)",
      color: "#ff4031",
      // textColor: "whitesmoke",
      // mutationColor: "whitesmoke"
    },
    {
      name: "Shem - שם",
      mutation: "D/E (YAP+)",
      color: "#8fb6ff",
      children: [
        {
          name: "Tharach - תרח",
          mutation: "",
          children: [
            {
              name: "Nachor - נחור",
              mutation: "D",
            },
            {
              name: "Haran - הרן",
              mutation: "D (D-F974)",
              children: [
                {
                  name: "Lot - לוט",
                  mutation: "D (D-M174) ",
                  children: [
                    {
                      name: "Moab - מואב",
                      mutation: "D1 (D-M15)",
                    },
                    {
                      name: "Ammon - עמון",
                      mutation: "D2 (D-M55)",
                    },
                  ],
                },
              ],
            },
            {
              name: "Abraham",
              mutation: "E (E-M96)",
              children: [
                {
                  name: "Ishmael - ישמעאל",
                  mutation: "E1a (E-M33)",
                },
                {
                  name: "Issac - יצחק",
                  mutation: "E1b1 (E-P2)",
                  children: [
                    {
                      name: "Jacob - יעקב",
                      mutation: "E1b1a (E-M2)",
                    },
                    {
                      name: "Esau - עשו",
                      mutation: "E1b1b (E-M215)",
                    },
                  ],
                },
                {
                  name: "Other Children",
                  mutation: "E2 (E-M75)",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "Yapheth - יפת",
      mutation: "C/F (YAP-)",
      color: "#ffdc45",
    },
  ],
};

export default DNAData;
