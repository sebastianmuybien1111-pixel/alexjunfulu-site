export const siteConfig = {
  name: "Alex Junfu Lu",
  shortName: "Alex Lu",
  url: "https://www.alexjunfulu.top",
  role: "International Relations Undergraduate",
  institution: "Xi’an Jiaotong-Liverpool University",
  location: "Suzhou, China",
  academicEmail: "junfu.lu24@student.xjtlu.edu.cn",
  personalEmail: "sebastianmuybien1111@gmail.com",
  github: "https://github.com/sebastianmuybien1111-pixel",
  instagram: "https://www.instagram.com/sebastien111105",
  description:
    "Academic portfolio of Alex Junfu Lu, an International Relations undergraduate interested in power, institutions, political decision-making, and international competition.",
} as const;

export const navigation = [
  { label: "About", href: "/about" },
  { label: "Research", href: "/research" },
  { label: "Engagement", href: "/engagement" },
  { label: "CV", href: "/cv" },
  { label: "Personal", href: "/notes-fragments" },
  { label: "Contact", href: "/contact" },
] as const;

export const researchAgenda = [
  {
    title: "Foreign Policy & State Behaviour",
    description:
      "How political institutions, leaders, and domestic incentives shape choices beyond the state.",
  },
  {
    title: "International Conflict & Geopolitics",
    description:
      "How security pressures, strategic competition, and contested orders affect international politics.",
  },
  {
    title: "Institutions & Global Governance",
    description:
      "How regional and global institutions organise cooperation, authority, and responses to shared problems.",
  },
  {
    title: "International Political Economy",
    description:
      "How security, markets, and political power interact across the global economy.",
  },
] as const;

export const methods = [
  "Qualitative case studies",
  "Comparative analysis",
  "Literature review",
  "Document analysis",
  "Basic quantitative analysis",
] as const;

export const areasOfInterest = [
  "Foreign Policy Decision-Making",
  "International Conflict",
  "Domestic Politics and State Behaviour",
  "International Relations Theory",
  "International Institutions",
] as const;
