import Link from "next/link";

interface BlogCardProps {
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
}

export default function BlogCard({ slug, title, date, category, excerpt }: BlogCardProps) {
  return (
    <Link
      href={`/blog/${slug}`}
      className="group block px-6 py-5 -mx-6 rounded-2xl transition-colors hover:bg-black/[0.02]"
    >
      <div className="flex items-center gap-3 mb-1.5">
        <time className="text-xs text-[var(--text-dim)] font-mono tabular-nums">
          {new Date(date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </time>
        <span className="text-xs px-2 py-0.5 rounded-full bg-[var(--accent-purple)]/5 text-[var(--accent-purple)] font-medium">
          {category}
        </span>
      </div>
      <h3 className="text-lg font-medium text-[var(--text-primary)] group-hover:text-[var(--accent-purple)] transition-colors">
        {title}
      </h3>
      {excerpt && (
        <p className="text-sm text-[var(--text-muted)] mt-1 line-clamp-2">{excerpt}</p>
      )}
    </Link>
  );
}
