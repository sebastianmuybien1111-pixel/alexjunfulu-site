import ResearchProjectDetail from "@/components/ResearchProjectDetail";
import { getResearchProject } from "@/data/research";
import { createMetadata } from "@/lib/metadata";

const project = getResearchProject("climate-governance")!;

export const metadata = createMetadata({
  title: project.shortTitle,
  description: project.description,
  path: `/research/${project.slug}`,
});

export default function ClimateGovernancePage() {
  return <ResearchProjectDetail project={project} />;
}
