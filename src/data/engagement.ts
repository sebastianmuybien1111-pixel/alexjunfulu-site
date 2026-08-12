export type EngagementItem = {
  year: "2024" | "2025" | "2026";
  title: string;
  category: "Dais Head" | "Dais Member" | "Delegate" | "Organisation";
  committee?: string;
  topic?: string;
  country?: string;
  honour?: string;
  role: string;
};

export const engagementItems: EngagementItem[] = [
  { year: "2026", title: "The 18th Zhejiang University Pan-Yangtze River Delta Region Model United Nations Conference", category: "Dais Head", committee: "UNGA Plenary", topic: "The Essequibo Crisis and the Contest over International Order: Sovereignty, Legitimacy, and Multilateralism", role: "Dais Head" },
  { year: "2026", title: "China Daily Model United Nations Conference", category: "Dais Head", committee: "United Nations Office on Drugs and Crime (UNODC)", role: "Dais Head" },
  { year: "2026", title: "The 19th Beijing Foreign Studies University Model United Nations Conference", category: "Dais Head", committee: "Third Special Session of the World Health Assembly (WHA)", role: "Dais Head" },
  { year: "2025", title: "The 15th Pan-Yangtze River Delta Region High School Model United Nations Conference", category: "Dais Head", committee: "United Nations Development Programme (UNDP)", role: "Dais Head" },
  { year: "2026", title: "The 18th Tongji University Model United Nations Conference & 2026 Shanghai Universities Model United Nations Conference", category: "Dais Member", committee: "UNESCO: Asia-Pacific Programme of Education for All (APPEAL)", role: "Dais Member" },
  { year: "2025", title: "Renmin University of China Intercollegiate Model United Nations Exchange Conference", category: "Dais Member", committee: "European Commission", role: "Dais Member" },
  { year: "2025", title: "The 18th Zhejiang University Pan-Yangtze River Delta Region Model United Nations Conference", category: "Dais Member", committee: "United Nations Security Council", role: "Dais Member" },
  { year: "2025", title: "The 1st Sino-Foreign Joint Model United Nations Conference", category: "Dais Member", committee: "United Nations Economic and Social Council", role: "Dais Member" },
  { year: "2025", title: "The 16th Huazhong University of Science and Technology Model United Nations Conference", category: "Dais Member", committee: "UN Women", role: "Dais Member" },
  { year: "2026", title: "National Model United Nations Conference of Nanjing University", category: "Delegate", committee: "8th IUCN World Conservation Congress", country: "France", honour: "Honorable Mention", role: "Delegate" },
  { year: "2025", title: "16th Xi’an Jiaotong University Model United Nations Conference", category: "Delegate", committee: "1986 United Nations Security Council Historical Simulation", country: "Kingdom of Lesotho", honour: "Outstanding Delegate", role: "Delegate" },
  { year: "2025", title: "Beijing International Model United Nations Conference", category: "Delegate", committee: "United Nations Development Programme", country: "Iceland", role: "Delegate" },
  { year: "2025", title: "National Model United Nations Conference of Nanjing University", category: "Delegate", committee: "United Nations General Assembly", country: "Al Jazeera Journalist", role: "Participant" },
  { year: "2024", title: "16th Donghua University Model United Nations Conference", category: "Delegate", committee: "UN Women", country: "Russian Federation", honour: "Best Storytelling Award", role: "Delegate" },
  { year: "2024", title: "16th Zhejiang University Pan-Yangtze River Delta Region Model United Nations Conference", category: "Delegate", committee: "4th International Conference on Sustainable Development Summit", country: "Russian Federation", honour: "Best Presentation Award", role: "Delegate" },
  { year: "2026", title: "Xi’an Jiaotong-Liverpool University Model United Nations Association", category: "Organisation", role: "Executive Secretary-General" },
  { year: "2025", title: "Xi’an Jiaotong-Liverpool University Model United Nations Association", category: "Organisation", role: "Academic Director" },
  { year: "2025", title: "Suzhou International Model United Nations Conference", category: "Organisation", role: "Organizing Committee Member" },
  { year: "2024", title: "14th Pan-Yangtze River Delta Region High School Model United Nations Conference", category: "Organisation", role: "Organizing Committee Member" },
];

export const featuredLeadership = engagementItems.filter((item) => item.category === "Dais Head");
export const daisExperience = engagementItems.filter((item) => item.category === "Dais Member");
export const delegateExperience = engagementItems.filter((item) => item.category === "Delegate");
export const organisationalLeadership = engagementItems.filter((item) => item.category === "Organisation");
