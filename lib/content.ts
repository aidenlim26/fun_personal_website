type Entry = {
  title: string;
  meta?: string;
  summary?: string;
  details?: readonly string[];
};

const name = "Aiden Lim";
const club = "SISHK AI Club";
const clubRole = "Founder and President";
const board = "Board of AI Integration";
// Role and interest confirmed in the redesign brief. Other copy comes from
// the public LinkedIn profile and Aiden's LinkedIn post about SISHK Scheduling.
const boardRole = "Chair";

export const site = {
  name,
  url: "https://aidenlim.vercel.app",
  linkedin: "https://www.linkedin.com/in/aidenlim26w/",
  title: `${name} | ${club} & ${board}`,
  description: `${name} is the ${clubRole} of the ${club} and ${boardRole} of the ${board}.`,
};

export const profile = {
  club,
  clubRole,
  board,
  boardRole,
  location: "Hong Kong",
  clubSummary: "I started the club to build AI literacy across our school community. It has grown to more than 80 members.",
  outreach: "I coordinate initiatives involving technology executives and HKU AIMED.",
  scheduling: {
    title: "SISHK Scheduling",
    meta: "School testing",
    summary: "Our club is building and testing a website to make school scheduling easier. I presented it to Singapore’s Minister for Education during a school visit.",
    details: [
      "Students can book teacher consultations through the site.",
      "Teachers can find shared free periods and reserve rooms.",
      "Heads of Department can arrange cover for absences.",
    ],
  } satisfies Entry,
  projects: [
    {
      title: "Timelit",
      meta: "Founder",
      summary: "I led development and strategy for an AI scheduling app and secured its initial funding.",
    },
    {
      title: "HFT Trading Simulator",
      meta: "Python · June 2026",
      summary: "I built a simulated exchange where 15 trading bots run different strategies and trade with each other.",
      details: [
        "I wrote the order matching engine and modelled price impact using both market data and the bots’ own trades.",
      ],
    },
  ] satisfies Entry[],
  education: [
    {
      title: "Singapore International School (Hong Kong)",
      meta: "Education",
      summary: "IB Diploma Programme. Earned nine IGCSE distinctions and received the school’s Academic Excellence Award in 2026.",
    },
    {
      title: "Mathematics for Machine Learning and Data Science",
      meta: "DeepLearning.AI specialisation · August 2026",
      details: ["Linear Algebra", "Calculus", "Probability and Statistics"],
    },
  ] satisfies Entry[],
  interests: [
    { title: "Ice hockey" },
    {
      title: "Painting",
      summary: "I earned gold in the 2026 United Nations World Youth Painting Competition and the 2025 London Youth Art Competition finals.",
      details: [
        "Peaceful Homeland was the theme of the 2026 entry.",
        "My 2025 entry, on the theme A Riot of Blossoms, was exhibited at Iconic Images Gallery in London.",
      ],
    },
  ] satisfies Entry[],
};

export type { Entry };
