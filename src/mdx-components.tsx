import type { MDXComponents } from 'mdx/types';

export function useMDXComponents(
  components: MDXComponents
): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="font-display mt-8 max-w-5xl text-5xl font-[600] leading-[1.08] tracking-[-0.03em] text-[#F1E6D8] md:text-7xl">
        {children}
      </h1>
    ),

    h2: ({ children }) => (
      <h2 className="font-display mt-10 mb-5 text-3xl font-semibold text-[#F1E6D8]">
        {children}
      </h2>
    ),

    h3: ({ children }) => (
      <h3 className="font-display mt-8 mb-4 text-2xl font-medium text-[#F1E6D8]">
        {children}
      </h3>
    ),

    p: ({ children }) => (
      <p className="mb-6 text-[1.05rem] leading-8 text-[#F1E6D8]/80">
        {children}
      </p>
    ),

    a: ({ href, children }) => (
      <a
        href={href}
        className="text-[#AA2B3A] underline underline-offset-4 transition hover:text-[#D9B8A7]"
      >
        {children}
      </a>
    ),

    blockquote: ({ children }) => (
      <blockquote className="my-8 border-l-4 border-[#AA2B3A] pl-6 italic text-[#F1E6D8]/70">
        {children}
      </blockquote>
    ),

    ul: ({ children }) => (
      <ul className="mb-6 list-inside list-disc space-y-2 text-[#F1E6D8]/80">
        {children}
      </ul>
    ),

    ol: ({ children }) => (
      <ol className="mb-6 list-inside list-decimal space-y-2 text-[#F1E6D8]/80">
        {children}
      </ol>
    ),

    ...components,
  };
}