
import Link from "next/link";
import { blogPosts } from "@/lib/blog";
import { Button } from "@/components/ui/button";
import BlogPostCard from "./BlogPostCard";

export default function Blog() {
  const latestPosts = blogPosts.slice(0, 3);

  return (
    <section id="blog" className="py-20 md:py-28 bg-transparent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            From our Blog
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Explore the latest in AI, industry trends, and our expert insights.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestPosts.map((post) => (
            <BlogPostCard key={post.slug} post={post} />
          ))}
        </div>
         <div className="text-center mt-12">
            <Button asChild>
                <Link href="/blog">View All Posts</Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
