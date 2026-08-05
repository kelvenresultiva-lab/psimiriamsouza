import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function MarkdownContent({ content }: { content: string }) {
  return (
    <div className="font-heebo text-base leading-relaxed text-ink [&>*+*]:mt-5">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ children }) => (
            <h1 className="font-playfair text-2xl font-semibold text-ink lg:text-3xl">{children}</h1>
          ),
          h2: ({ children }) => (
            <h2 className="font-playfair text-xl font-semibold text-ink lg:text-2xl">{children}</h2>
          ),
          h3: ({ children }) => (
            <h3 className="font-playfair text-lg font-semibold text-ink">{children}</h3>
          ),
          p: ({ children }) => <p className="text-muted">{children}</p>,
          a: ({ children, href }) => (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-gold-bright underline underline-offset-2 hover:text-gold"
            >
              {children}
            </a>
          ),
          ul: ({ children }) => (
            <ul className="list-disc space-y-2 pl-6 text-muted">{children}</ul>
          ),
          ol: ({ children }) => (
            <ol className="list-decimal space-y-2 pl-6 text-muted">{children}</ol>
          ),
          blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-gold-bright bg-surface px-5 py-3 italic text-muted">
              {children}
            </blockquote>
          ),
          strong: ({ children }) => <strong className="font-semibold text-ink">{children}</strong>,
          hr: () => <hr className="border-line" />,
          img: ({ src, alt }) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={typeof src === "string" ? src : undefined} alt={alt ?? ""} className="rounded-xl" />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
