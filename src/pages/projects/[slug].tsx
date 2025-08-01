import { GetStaticPaths, GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';
import Image from 'next/image';
import { projects, Project } from '@/lib/projects';
import Header from '@/components/landing/Header';
import Footer from '@/components/landing/Footer';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

interface IParams extends ParsedUrlQuery {
  slug: string;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = projects.map((project) => ({
    params: { slug: project.slug },
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as IParams;
  const project = projects.find((p) => p.slug === slug);
  return { props: { project } };
};

export default function ProjectDetailPage({ project }: { project: Project }) {
  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 py-12 md:py-20">
        <div className="container mx-auto px-4 max-w-6xl">
            <header className="mb-8 md:mb-12">
                <Button asChild variant="outline" className='mb-8'>
                    <Link href="/projects" className='flex items-center gap-2'>
                        <ArrowLeft className="h-4 w-4" />
                        Back to All Projects
                    </Link>
                </Button>
                <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl mb-4">
                {project.title}
                </h1>
                <p className="text-xl text-muted-foreground max-w-3xl">
                    {project.description}
                </p>
            </header>
            
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {project.imageUrls.map((url, index) => (
                <div key={index} className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg group">
                    <Image
                    src={url}
                    alt={`${project.title} - Image ${index + 1}`}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="transition-transform duration-300 group-hover:scale-105"
                    data-ai-hint={project.dataAiHint}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                </div>
                ))}
            </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
