
"use client";
import { Mountain, Twitter, Linkedin, Github } from "lucide-react";
import Link from "next/link";
import { useEffect } from 'react';

const SocialLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link href={href} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
    {children}
  </Link>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary/10 border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Mountain className="h-6 w-6 text-primary" />
            <span className="font-bold text-lg">Nurox.dev</span>
          </div>
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Nurox Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <SocialLink href="https://twitter.com/nurox_dev"><Twitter className="h-5 w-5" /></SocialLink>
            <SocialLink href="https://www.linkedin.com/company/nurox-dev/"><Linkedin className="h-5 w-5" /></SocialLink>
            <SocialLink href="https://github.com/nurox-dev"><Github className="h-5 w-5" /></SocialLink>
          </div>
        </div>
      </div>
    </footer>
  );
}
