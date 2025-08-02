import { blogPosts } from "@/lib/blog";
import BlogPostCard from "@/components/landing/BlogPostCard";

export default function BlogPage() {
    return (
        <div className="container mx-auto px-4 py-20 md:py-28">
            <div className="text-center mb-16">
                <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
                    From our Blog
                </h1>
                <p className="mt-4 max-w-3xl mx-auto text-xl text-muted-foreground">
                    Explore the latest in AI, industry trends, and our expert insights.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.map((post) => (
                    <BlogPostCard key={post.slug} post={post} />
                ))}
            </div>
        </div>
    )
}
