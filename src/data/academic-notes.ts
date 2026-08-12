export type AcademicNoteCategory =
  | "Reading Notes"
  | "Concept Notes"
  | "Research Notes"
  | "Methods Notes"
  | "IR Theory Notes"
  | "Case Notes";

export type AcademicNote = {
  slug: string;
  title: string;
  date: string;
  category: AcademicNoteCategory;
  tags: string[];
  description: string;
  body: string[];
  references?: string[];
};

// Add public notes here only after their content and references are ready.
export const academicNotes: AcademicNote[] = [];

export const academicNoteCategories: AcademicNoteCategory[] = [
  "Reading Notes",
  "Concept Notes",
  "Research Notes",
  "Methods Notes",
  "IR Theory Notes",
  "Case Notes",
];

export const plannedNoteTopics = [
  "International institutions",
  "Global governance",
  "Foreign policy decision-making",
  "International political economy",
  "Domestic politics and state behaviour",
];
