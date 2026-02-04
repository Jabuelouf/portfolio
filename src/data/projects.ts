export type Project = {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  links?: {
    repo?: string;
    demo?: string;
  };
  highlights?: string[];
};

export const projects: Project[] = [
  {
    slug: "cyclistic-analysis",
    title: "Cyclistic Ride Share Analysis",
    description:
      "End-to-end analysis of bike share usage patterns with clear recommendations for growth.",
    tags: ["Python", "Pandas", "EDA", "Storytelling"],
    links: {
      demo: "https://www.kaggle.com/code/jonathanabuelouf/cyclistic-ride-share-analysis",
    },
    highlights: [
      "Cleaned and joined ride data to uncover rider behavior",
      "Translated trends into marketing and retention recommendations",
    ],
  },
  {
    slug: "tableau-visuals",
    title: "Tableau Public Dashboards",
    description:
      "Interactive dashboards focused on operational KPIs, trend analysis, and executive reporting.",
    tags: ["Tableau", "Data Visualization", "Dashboards"],
    links: {
      demo: "https://public.tableau.com/app/profile/jonathan8167/vizzes",
    },
    highlights: [
      "Designed KPI-focused views with filters for quick exploration",
      "Delivered clear narratives with annotations and benchmarks",
    ],
  },
  {
    slug: "option-advisor",
    title: "Option Advisor",
    description:
      "Options analysis toolkit with data pipelines and model export automation.",
    tags: ["Python", "Pandas", "Time Series", "Docker"],
    links: {
      repo: "https://github.com/jabuelouf/option_advisor",
    },
    highlights: [
      "Built reusable data ingestion + cleaning pipeline",
      "Exported models for downstream scoring and reporting",
    ],
  },
  {
    slug: "cohort-retention",
    title: "Cohort Retention Analysis",
    description:
      "Cohort and retention reporting with clear storytelling and actionable insights.",
    tags: ["SQL", "Python", "Visualization", "Storytelling"],
    highlights: [
      "Built cohort tables and retention curves",
      "Identified drop-off points and proposed interventions",
    ],
  },
];
