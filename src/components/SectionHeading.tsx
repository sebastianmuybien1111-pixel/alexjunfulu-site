type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  id?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  id,
}: SectionHeadingProps) {
  return (
    <header className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2 id={id}>{title}</h2>
      {description ? <p className="section-heading__description">{description}</p> : null}
    </header>
  );
}
