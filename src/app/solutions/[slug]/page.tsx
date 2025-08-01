import { notFound } from 'next/navigation';
import Image from 'next/image';
import { solutions } from '@/lib/solutions';
import Header from '@/components/landing/Header';
import Footer from '@/components/landing/Footer';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function generateStaticParams() {
  return solutions.map((solution) => ({
    slug: solution.slug,
  }));
}

export default function SolutionDetailPage({ params }: { params: { slug: string } }) {
  const solution = solutions.find((s) => s.slug === params.slug);

  if (!solution) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 py-12 md:py-20">
        <div className="container mx-auto px-4 max-w-5xl">
            <header className="mb-8 md:mb-12">
                <Button asChild variant="outline" className='mb-8'>
                    <Link href="/solutions" className='flex items-center gap-2'>
                        <ArrowLeft className="h-4 w-4" />
                        Back to All Solutions
                    </Link>
                </Button>
                 <div className="flex items-start gap-6 mb-6">
                    <div className="p-4 bg-primary/10 rounded-full mt-1">
                        <solution.icon className="h-10 w-10 text-primary" />
                    </div>
                    <div>
                        <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
                        {solution.title}
                        </h1>
                    </div>
                </div>
            </header>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg group">
                    <Image
                    src={solution.imageUrl}
                    alt={solution.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="transition-transform duration-300 group-hover:scale-105"
                    data-ai-hint={solution.dataAiHint}
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                    />
                </div>
                <div className="space-y-6">
                    <p className="text-xl text-muted-foreground">
                        {solution.description}
                    </p>
                    <div className="text-lg text-foreground/90 leading-relaxed space-y-4">
                        <p>
                            {solution.detailedDescription}
                        </p>
                    </div>
                </div>
            </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
