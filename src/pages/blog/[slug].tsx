import { GetStaticPaths, GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';
import Image from 'next/image';
import { blogPosts, BlogPost } from '@/lib/blog';
import Header from '@/components/landing/Header';
import Footer from '@/components/landing/Footer';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { CalendarDays, User } from 'lucide-react';

interface IParams extends ParsedUrlQuery {
  slug: string;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = blogPosts.map((post) => ({
    params: { slug: post.slug },
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as IParams;
  const post = blogPosts.find((p) => p.slug === slug);
  return { props: { post } };
};

export default function BlogPostPage({ post }: { post: BlogPost }) {
  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 py-12 md:py-20">
        <article className="container mx-auto px-4 max-w-4xl">
          <header className="mb-8">
            <Badge variant="secondary" className="mb-4">{post.category}</Badge>
            <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl mb-4">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-muted-foreground text-sm">
                <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    <span>{post.author.name}</span>
                </div>
                 <div className="flex items-center gap-2">
                    <CalendarDays className="h-4 w-4" />
                    <time dateTime={post.date}>{post.date}</time>
                </div>
            </div>
          </header>
          
          <div className="relative w-full h-96 rounded-lg overflow-hidden mb-12 shadow-lg">
            <Image
                src={post.imageUrl}
                alt={post.title}
                fill
                style={{ objectFit: 'cover' }}
                data-ai-hint={post.dataAiHint}
                priority
            />
          </div>

          <div className="prose prose-lg max-w-none text-foreground/90 leading-relaxed" dangerouslySetInnerHTML={{ __html: post.content }} />
        
          <footer className="mt-12 pt-8 border-t">
            <div className="flex items-center gap-4">
                <Avatar className="h-16 w-16">
                    <AvatarImage src={post.author.avatarUrl} alt={post.author.name} />
                    <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                    <h3 className="font-bold text-lg">About the Author</h3>
                    <p className="text-muted-foreground">{post.author.name}</p>
                </div>
            </div>
          </footer>

        </article>
      </main>
      <Footer />
    </div>
  );
}
