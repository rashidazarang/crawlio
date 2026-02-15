import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import gfm from "remark-gfm";

const contentDir = path.join(process.cwd(), "content");

export interface Post {
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  content: string;  // raw markdown
}

export interface PostWithHtml extends Post {
  htmlContent: string;
  readingTime: number;
}

export function getAllPosts(dir: string): Post[] {
  const fullDir = path.join(contentDir, dir);
  if (!fs.existsSync(fullDir)) return [];

  const files = fs.readdirSync(fullDir).filter((f) => f.endsWith(".md"));

  const posts = files.map((filename) => {
    const slug = filename.replace(/\.md$/, "");
    const filePath = path.join(fullDir, filename);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(fileContent);

    return {
      slug,
      title: data.title || slug,
      date: data.date || "",
      category: data.category || "General",
      excerpt: data.excerpt || "",
      content,
    };
  });

  return posts.sort((a, b) => (a.date > b.date ? -1 : 1));
}

export async function getPostBySlug(dir: string, slug: string): Promise<PostWithHtml | null> {
  const filePath = path.join(contentDir, dir, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  const processed = await remark().use(gfm).use(html).process(content);
  const htmlContent = processed.toString();

  const words = content.split(/\s+/).length;
  const readingTime = Math.max(1, Math.ceil(words / 200));

  return {
    slug,
    title: data.title || slug,
    date: data.date || "",
    category: data.category || "General",
    excerpt: data.excerpt || "",
    content,
    htmlContent,
    readingTime,
  };
}
