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
    slug: "dashboard-suite",
    title: "Dashboard Suite",
    description:
      "Interactive dashboards for tracking KPIs across business and product metrics.",
    tags: ["SQL", "Power BI", "Tableau", "Data Modeling"],
    highlights: [
      "Designed star-schema models for fast slicing and filtering",
      "Delivered exec-ready KPI views and drilldowns",
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
