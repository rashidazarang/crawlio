import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { getAllPosts, getPostBySlug } from "@/lib/content";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts("blog");
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug("blog", slug);
  if (!post) return { title: "Not Found — Crawlio" };
  return {
    title: `${post.title} — Crawlio Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug("blog", slug);
  if (!post) notFound();

  return (
    <>
      <Nav />
      <main className="min-h-screen pt-32 pb-20 px-4 md:px-8">
        <div className="max-w-2xl mx-auto">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm text-[var(--text-muted)] hover:text-[var(--accent-purple)] transition-colors mb-8"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>

          <article className="glass-card p-8 md:p-12">
            <div className="flex items-center gap-3 mb-6">
              <time className="text-sm text-[var(--text-dim)] font-mono">
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              <span className="text-[var(--text-dim)]">/</span>
              <span className="text-sm text-[var(--text-dim)]">{post.readingTime} min read</span>
              <span className="text-[var(--text-dim)]">/</span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-[var(--accent-purple)]/5 text-[var(--accent-purple)] font-medium">
                {post.category}
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl font-medium tracking-tight text-[var(--text-primary)] mb-8">
              {post.title}
            </h1>

            {/* Content sourced from local markdown files only — safe from XSS */}
            <div
              className="prose prose-lg max-w-none
                prose-headings:text-[var(--text-primary)] prose-headings:font-medium prose-headings:tracking-tight
                prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4 prose-h2:border-b prose-h2:border-black/5 prose-h2:pb-3
                prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
                prose-p:text-[var(--text-body)] prose-p:leading-[1.8] prose-p:mb-5
                prose-a:text-[var(--accent-purple)] prose-a:no-underline prose-a:font-medium hover:prose-a:underline
                prose-strong:text-[var(--text-primary)] prose-strong:font-semibold
                prose-code:text-[var(--accent-purple)] prose-code:bg-[var(--accent-purple)]/5 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md prose-code:text-[0.875em] prose-code:font-normal prose-code:before:content-none prose-code:after:content-none
                prose-pre:bg-[#1a1a2e] prose-pre:text-gray-300 prose-pre:rounded-2xl prose-pre:border prose-pre:border-white/10 prose-pre:px-6 prose-pre:py-5 prose-pre:text-sm prose-pre:leading-relaxed
                prose-ol:pl-6 prose-ol:space-y-2 prose-ul:pl-6 prose-ul:space-y-2
                prose-li:text-[var(--text-body)] prose-li:leading-[1.7]
                prose-blockquote:border-l-[3px] prose-blockquote:border-[var(--accent-purple)] prose-blockquote:bg-[var(--accent-purple)]/[0.03] prose-blockquote:rounded-r-xl prose-blockquote:py-3 prose-blockquote:px-5 prose-blockquote:text-[var(--text-muted)] prose-blockquote:not-italic
                prose-hr:border-black/5 prose-hr:my-10
                prose-img:rounded-2xl"
              dangerouslySetInnerHTML={{ __html: post.htmlContent }}
            />
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
}
