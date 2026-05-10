import Link from "next/link";

type BackToHomeLinkProps = {
  className?: string;
};

export default function BackToHomeLink({
  className = "",
}: BackToHomeLinkProps) {
  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-4 text-sm uppercase tracking-[0.34em] text-[#AA2B3A] transition hover:text-[#F1E6D8] ${className}`.trim()}
    >
      <span aria-hidden="true" className="text-base leading-none">
        ←
      </span>
      <span>Back to Home</span>
    </Link>
  );
}
