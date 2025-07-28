
"use client";

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { type Project } from '@/lib/data';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isHovered) {
      intervalRef.current = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % project.imageUrls.length);
      }, 1500);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      setCurrentImageIndex(0);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isHovered, project.imageUrls.length]);

  return (
    <Card
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="flex flex-col overflow-hidden transition-all duration-300 group bg-card/60 backdrop-blur-lg border-white/20 hover:shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-1 hover:scale-105"
    >
      <div className="relative w-full h-64 overflow-hidden rounded-t-lg">
        {project.imageUrls.map((url, index) => (
          <Image
            key={index}
            src={url}
            alt={`${project.title} - view ${index + 1}`}
            fill
            style={{ objectFit: 'cover' }}
            className={cn(
              'transition-opacity duration-1000 ease-in-out',
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            )}
            data-ai-hint={project.dataAiHint}
            priority={index === 0}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-6">
          <CardTitle className="text-white text-2xl">{project.title}</CardTitle>
        </div>
      </div>
      <CardContent className="flex-grow flex flex-col p-6">
        <CardDescription className="flex-grow">{project.description}</CardDescription>
        <Button asChild className="mt-6 self-start">
          <Link href={`/projects/${project.slug}`}>
            View Project <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}
