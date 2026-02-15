import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/content";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const docs = getAllPosts("docs");
  return docs.map((doc) => ({ slug: doc.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const doc = await getPostBySlug("docs", slug);
  if (!doc) return { title: "Not Found -- Crawlio Docs" };
  return {
    title: `${doc.title} -- Crawlio Docs`,
    description: doc.excerpt,
  };
}

export default async function DocPage({ params }: Props) {
  const { slug } = await params;
  const doc = await getPostBySlug("docs", slug);
  if (!doc) notFound();

  return (
    <div>
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-[var(--text-dim)] mb-6">
        <span>Docs</span>
        <span>/</span>
        <span className="text-[var(--text-muted)]">{doc.title}</span>
      </div>

      <h1 className="text-3xl md:text-4xl font-medium tracking-tight text-[var(--text-primary)] mb-8">
        {doc.title}
      </h1>

      {/* Content sourced from local markdown files only — safe from XSS */}
      <div
        className="prose prose-lg max-w-none
          prose-headings:text-[var(--text-primary)] prose-headings:font-medium prose-headings:tracking-tight
          prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4 prose-h2:border-b prose-h2:border-black/5 prose-h2:pb-3
          prose-h3:text-lg prose-h3:mt-8 prose-h3:mb-3
          prose-p:text-[var(--text-body)] prose-p:leading-[1.8] prose-p:text-base prose-p:mb-4
          prose-a:text-[var(--accent-purple)] prose-a:no-underline prose-a:font-medium hover:prose-a:underline
          prose-strong:text-[var(--text-primary)] prose-strong:font-semibold
          prose-code:text-[var(--accent-purple)] prose-code:bg-[var(--accent-purple)]/5 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md prose-code:text-[0.875em] prose-code:font-normal prose-code:before:content-none prose-code:after:content-none
          prose-pre:bg-[#1a1a2e] prose-pre:text-gray-300 prose-pre:rounded-2xl prose-pre:border prose-pre:border-white/10 prose-pre:px-6 prose-pre:py-5 prose-pre:text-sm prose-pre:leading-relaxed
          prose-ol:pl-6 prose-ol:space-y-1 prose-ul:pl-6 prose-ul:space-y-1
          prose-li:text-[var(--text-body)] prose-li:leading-[1.7] prose-li:text-base
          prose-blockquote:border-l-[3px] prose-blockquote:border-[var(--accent-purple)] prose-blockquote:bg-[var(--accent-purple)]/[0.03] prose-blockquote:rounded-r-xl prose-blockquote:py-3 prose-blockquote:px-5 prose-blockquote:text-[var(--text-muted)] prose-blockquote:not-italic
          prose-table:text-sm prose-table:w-full
          prose-thead:border-b prose-thead:border-black/10
          prose-th:text-[var(--text-primary)] prose-th:font-semibold prose-th:text-left prose-th:py-3 prose-th:px-4 prose-th:text-xs prose-th:uppercase prose-th:tracking-wider
          prose-td:text-[var(--text-body)] prose-td:py-2.5 prose-td:px-4 prose-td:border-b prose-td:border-black/5
          prose-hr:border-black/5 prose-hr:my-10
          prose-img:rounded-2xl"
        dangerouslySetInnerHTML={{ __html: doc.htmlContent }}
      />
    </div>
  );
}
