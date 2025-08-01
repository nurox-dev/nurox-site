import Footer from "@/components/landing/Footer";
import Header from "@/components/landing/Header";
import { blogPosts } from "@/lib/blog";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function BlogPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1 py-20 md:py-28">
                <div className="container mx-auto px-4">
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
                             <Card key={post.slug} className="flex flex-col overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300">
                                <CardHeader className="p-0">
                                    <Link href={`/blog/${post.slug}`} className="block relative w-full h-56">
                                    <Image
                                        src={post.imageUrl}
                                        alt={post.title}
                                        fill
                                        style={{ objectFit: "cover" }}
                                        className="hover:scale-105 transition-transform duration-300"
                                        data-ai-hint={post.dataAiHint}
                                    />
                                    </Link>
                                </CardHeader>
                                <CardContent className="p-6 flex-grow">
                                    <Badge variant="secondary" className="mb-2">{post.category}</Badge>
                                    <CardTitle className="text-xl mb-2 leading-snug">
                                    <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                                        {post.title}
                                    </Link>
                                    </CardTitle>
                                    <p className="text-muted-foreground text-sm line-clamp-3">
                                    {post.excerpt}
                                    </p>
                                </CardContent>
                                <CardFooter className="p-6 pt-0 flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <Avatar className="h-9 w-9">
                                            <AvatarImage src={post.author.avatarUrl} alt={post.author.name} />
                                            <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
                                        </Avatar>
                                        <div>
                                            <p className="text-sm font-medium">{post.author.name}</p>
                                            <p className="text-xs text-muted-foreground">{post.date}</p>
                                        </div>
                                    </div>
                                    <Button variant="outline" size="icon" asChild>
                                        <Link href={`/blog/${post.slug}`}>
                                            <ArrowRight className="h-4 w-4" />
                                        </Link>
                                    </Button>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}
