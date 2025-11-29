import Link from "next/link";
import { blogPosts } from "@/src/data/content";
import { Card } from "@/src/components/ui/Card";
import { CTAButton } from "@/src/components/ui/CTAButton";

function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, "").trim();
}

function getExcerpt(html: string, maxLength: number = 150): string {
  const text = stripHtml(html);
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + "...";
}

export default function BlogPage() {
  return (
    <div>
      <h1 className="text-5xl font-bold text-[#0F4C3A] mb-10">Blog</h1>
      <div className="grid gap-8">
        {blogPosts.map((post) => {
          const excerpt = getExcerpt(post.bodyHtml);
          return (
            <Card key={post.slug}>
              <h2 className="text-2xl font-bold text-[#0F4C3A] mb-3">
                {post.title}
              </h2>
              <div className="text-sm text-gray-600 mb-4">
                By {post.author}
                {post.reviewedBy && ` · Reviewed by ${post.reviewedBy}`}
                {" · "}
                {new Date(post.publishedDate).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">{excerpt}</p>
              <CTAButton href={`/blog/${post.slug}`} variant="secondary">
                Read article
              </CTAButton>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

