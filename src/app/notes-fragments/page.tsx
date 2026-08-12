import NotesFragmentsArchive, { getValidArchiveFilter } from "./NotesFragmentsArchive";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Personal Archive",
  description:
    "A personal archive of video, photography, visual design, and music notes by Alex Junfu Lu, separate from the academic research portfolio.",
  path: "/notes-fragments",
});

type PersonalArchivePageProps = {
  searchParams: Promise<{ filter?: string | string[] }>;
};

export default async function PersonalArchivePage({ searchParams }: PersonalArchivePageProps) {
  const { filter } = await searchParams;
  const activeFilter = getValidArchiveFilter(filter);

  return (
    <main id="main-content" className="page-main personal-archive">
      <header className="page-header shell">
        <p className="eyebrow">Personal archive</p>
        <h1>Images, sound, and fragments outside the academic record.</h1>
        <p className="page-header__lead">
          A separate space for moving images, photography, visual experiments, and listening notes. These items are personal work and are not presented as research outputs.
        </p>
      </header>
      <NotesFragmentsArchive activeFilter={activeFilter} />
    </main>
  );
}
