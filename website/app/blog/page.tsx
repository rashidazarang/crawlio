import { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import BlogCard from "@/components/BlogCard";
import { getAllPosts } from "@/lib/content";

export const metadata: Metadata = {
  title: "Blog — Crawlio",
  description: "Product updates, technical deep-dives, and guides from the Crawlio team.",
};

export default function BlogPage() {
  const posts = getAllPosts("blog");

  return (
    <>
      <Nav />
      <main className="min-h-screen pt-32 pb-20 px-4 md:px-8">
        <div className="max-w-2xl mx-auto">
          <h1 className="gradient-text text-4xl md:text-5xl font-medium tracking-tight mb-4">Blog</h1>
          <p className="text-lg text-[var(--text-muted)] mb-12">
            Product updates and technical deep-dives.
          </p>
          <div className="glass-card p-6 md:p-8">
            <div className="divide-y divide-black/5">
              {posts.map((post) => (
                <BlogCard key={post.slug} {...post} />
              ))}
            </div>
            {posts.length === 0 && (
              <p className="text-center text-[var(--text-muted)] py-8">No posts yet.</p>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
