export type ResearchAsset = {
  label: string;
  href: string;
  kind: "pdf" | "poster" | "bibtex" | "doi";
};

export type ResearchProject = {
  slug: string;
  title: string;
  shortTitle: string;
  year: string;
  status: "Publication" | "Research Project" | "Selected Research Paper" | "Working Paper";
  category: "publication" | "paper" | "project";
  area: string;
  description: string;
  tags: string[];
  methods?: string[];
  href?: string;
  assets?: ResearchAsset[];
  citation?: string;
  researchQuestion?: string;
  abstract?: string[];
  workingArgument?: string;
  theoreticalFramework?: string[];
  researchDesign?: string;
  caseSelection?: string;
  evidence?: string;
  currentStatus?: string;
  references?: string[];
  lastUpdated?: string;
};

export const researchProjects: ResearchProject[] = [
  {
    slug: "climate-refugee-management",
    title: "Complex Mechanisms in Climate Refugee Management: A Case Study from Bangladesh",
    shortTitle: "Complex Mechanisms in Climate Refugee Management",
    year: "2025",
    status: "Publication",
    category: "publication",
    area: "Global Governance · Climate Migration",
    description:
      "A co-authored, peer-reviewed conference proceedings paper on the interaction of legal and governance mechanisms in Bangladesh’s response to climate displacement.",
    tags: ["Climate Migration", "Bangladesh", "Global Governance"],
    href: "https://doi.org/10.5220/0014003400004912",
    assets: [
      { label: "Read at SciTePress", href: "https://www.scitepress.org/Papers/2025/140034/140034.pdf", kind: "pdf" },
      { label: "Open DOI", href: "https://doi.org/10.5220/0014003400004912", kind: "doi" },
    ],
    citation:
      "Fang, Y., & Lu, J. (2025). Complex Mechanisms in Climate Refugee Management: A Case Study from Bangladesh. In Proceedings of the 1st International Conference on Innovative Education and Social Development (IESD 2025), 564–570. SciTePress.",
    currentStatus: "Published in the IESD 2025 conference proceedings by SciTePress.",
    lastUpdated: "2025",
  },
  {
    slug: "regional-organisations",
    title: "When Are Regional Organisations More Effective than Global Institutions? Explaining Governance Effectiveness in Complex Transnational Challenges",
    shortTitle: "When Are Regional Organisations More Effective than Global Institutions?",
    year: "2026",
    status: "Selected Research Paper",
    category: "paper",
    area: "International Institutions · Global Governance",
    description:
      "A selected research paper comparing the conditions under which regional and global institutions respond effectively to complex transnational challenges.",
    tags: ["Regional Organisations", "International Institutions", "Governance"],
    currentStatus: "Selected undergraduate research paper; not a peer-reviewed publication.",
    lastUpdated: "2026",
  },
  {
    slug: "security-overrides-efficiency",
    title: "When Security Overrides Efficiency: The Return of Geopolitics in the Global Economy",
    shortTitle: "When Security Overrides Efficiency",
    year: "2026",
    status: "Selected Research Paper",
    category: "paper",
    area: "International Political Economy · Geopolitics",
    description:
      "A selected research paper examining how strategic and security priorities are reshaping choices once organised primarily around economic efficiency.",
    tags: ["Geoeconomics", "International Political Economy", "Security"],
    currentStatus: "Selected undergraduate research paper; not a peer-reviewed publication.",
    lastUpdated: "2026",
  },
  {
    slug: "climate-governance",
    title: "Unequal Skies, Shared Destiny: Bridging the Political and Financial Rift in Global Climate Governance",
    shortTitle: "Unequal Skies, Shared Destiny",
    year: "2026",
    status: "Working Paper",
    category: "paper",
    area: "Global Governance · Climate Politics",
    description:
      "A working paper on inequalities among emissions, climate vulnerability, financial capacity, and representation in global climate governance.",
    tags: ["Climate Governance", "Climate Justice", "Global South", "Institutional Design"],
    methods: ["Secondary data analysis", "Conceptual analysis", "Policy design"],
    href: "/research/climate-governance",
    researchQuestion:
      "Why do populations and states that contributed least to climate change often face the greatest harm and the weakest financial capacity to respond?",
    abstract: [
      "The paper examines the divide between the geography of emissions and the geography of climate harm, relating this inequality to fragmented institutions and unequal influence within global climate governance.",
      "It develops a policy framework organised around financing, South–South cooperation, monitoring, and accountability. The proposal remains part of a working paper and is not an implemented institution.",
    ],
    workingArgument:
      "The paper argues that climate governance should be evaluated through distributive justice, representation, and institutional coordination rather than voluntary finance alone.",
    theoreticalFramework: ["Distributive justice", "Institutional fragmentation", "Discourse power", "Common but differentiated responsibilities"],
    researchDesign:
      "A conceptual and policy-oriented paper drawing on published emissions data, economic projections, and scholarship on climate justice and institutional design.",
    caseSelection:
      "The project is global rather than a single-case study and uses cross-national patterns of emissions, vulnerability, and financial capacity as contextual evidence.",
    evidence:
      "The paper draws on published data and scholarship, including research on carbon inequality and climate-related economic impacts.",
    currentStatus: "Working paper. It is not presented as a peer-reviewed publication.",
    references: [
      "Burke, M., Hsiang, S. M., & Miguel, E. (2015). Global non-linear effect of temperature on economic production.",
      "Chancel, L. (2022). Global Carbon Inequality 1990–2019.",
      "Ostrom, E. (2009). A Polycentric Approach for Coping with Climate Change.",
      "Roberts, J. T., & Parks, B. C. (2007). A Climate of Injustice.",
    ],
    assets: [
      { label: "Read working paper (PDF)", href: "/research/climate-governance-paper.pdf", kind: "pdf" },
      { label: "View research poster (PDF)", href: "/research/climate-governance-poster.pdf", kind: "poster" },
      { label: "Download citation (BibTeX)", href: "/research/climate-governance.bib", kind: "bibtex" },
    ],
    citation: "Lu, Junfu. 2026. “Unequal Skies, Shared Destiny.” Working paper, Xi’an Jiaotong-Liverpool University.",
    lastUpdated: "2026",
  },
  {
    slug: "algorithmic-jurisdictions",
    title: "Algorithmic Jurisdictions: Lex Informatica and Legal Heterodoxy in the Chinese Platform Economy",
    shortTitle: "Algorithmic Jurisdictions",
    year: "2026",
    status: "Research Project",
    category: "project",
    area: "Digital Governance · Platform Economy",
    description:
      "A Summer Undergraduate Research Fellowship project at XJTLU, supervised by Dr. Mohsen Al Attar.",
    tags: ["Digital Governance", "Platform Economy", "SURF"],
    currentStatus: "2026 Summer Undergraduate Research Fellowship project.",
    lastUpdated: "2026",
  },
  {
    slug: "icc-arrest-warrants",
    title: "Accountability and Politics: Measuring ICC Arrest Warrants’ Practical Effects",
    shortTitle: "Accountability and Politics",
    year: "2025",
    status: "Research Project",
    category: "project",
    area: "International Institutions · Accountability",
    description:
      "A 2025 XJTLU SURF research-assistant project supervised by Dr. Lina Gong.",
    tags: ["International Criminal Court", "Accountability", "SURF"],
    currentStatus: "Completed 2025 Summer Undergraduate Research Fellowship experience.",
    lastUpdated: "2025",
  },
];

export const researchExperience = [
  {
    year: "2026",
    role: "Summer Undergraduate Research Fellow (SURF)",
    institution: "Xi’an Jiaotong-Liverpool University",
    project: "Algorithmic Jurisdictions: Lex Informatica and Legal Heterodoxy in the Chinese Platform Economy",
    supervisor: "Dr. Mohsen Al Attar",
  },
  {
    year: "2025",
    role: "Undergraduate Research Assistant / SURF",
    institution: "Xi’an Jiaotong-Liverpool University",
    project: "Accountability and Politics: Measuring ICC Arrest Warrants’ Practical Effects",
    supervisor: "Dr. Lina Gong",
  },
  {
    year: "2025",
    role: "Research Lead",
    institution: "XJTLU Research-Led Learning Symposium",
    project: "A Global Climate Framework for a Shared Future",
    distinction: "First Prize",
  },
] as const;

export function getResearchProject(slug: string) {
  return researchProjects.find((project) => project.slug === slug);
}
