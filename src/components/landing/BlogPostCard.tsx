
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { type BlogPost } from "@/lib/blog";

export default function BlogPostCard({ post }: { post: BlogPost }) {
  return (
    <Card className="flex flex-col overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300">
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
  );
}
