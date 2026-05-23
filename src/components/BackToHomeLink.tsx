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
      className={`inline-flex items-center gap-3 text-[0.72rem] uppercase tracking-[0.28em] text-[#AA2B3A] transition hover:text-[#F1E6D8] sm:gap-4 sm:text-sm sm:tracking-[0.34em] ${className}`.trim()}
    >
      <span aria-hidden="true" className="text-base leading-none">
        ←
      </span>
      <span>Back to Home</span>
    </Link>
  );
}
