import { Mountain, Twitter, Linkedin, Github } from "lucide-react";
import Link from "next/link";

const SocialLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link href={href} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
    {children}
  </Link>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-transparent border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Mountain className="h-6 w-6 text-primary" />
            <span className="font-bold text-lg">Nurox</span>
          </div>
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Nurox Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <SocialLink href="#"><Twitter className="h-5 w-5" /></SocialLink>
            <SocialLink href="#"><Linkedin className="h-5 w-5" /></SocialLink>
            <SocialLink href="#"><Github className="h-5 w-5" /></SocialLink>
          </div>
        </div>
      </div>
    </footer>
  );
}
