import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Mountain } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

const NavLink = ({ href, children }: { href: string, children: React.ReactNode }) => (
    <Link href={href} className="text-foreground/80 transition-colors hover:text-foreground">
        {children}
    </Link>
);

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Mountain className="h-6 w-6 text-primary" />
            <span className="font-bold sm:inline-block text-lg text-primary">Nurox.dev</span>
          </Link>
          <nav className="flex items-center gap-6 text-sm">
            <NavLink href="/projects">Projects</NavLink>
            <NavLink href="/solutions">Solutions</NavLink>
            <NavLink href="/blog">Blog</NavLink>
          </nav>
        </div>
        
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <div className="md:hidden">
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="ghost" size="icon">
                            <Menu className="h-5 w-5" />
                            <span className="sr-only">Toggle Menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left">
                        <div className="grid gap-6 p-6">
                            <Link href="/" className="flex items-center space-x-2">
                                <Mountain className="h-6 w-6 text-primary" />
                                <span className="font-bold text-lg text-primary">Nurox.dev</span>
                            </Link>
                            <nav className="grid gap-4 text-lg">
                                <NavLink href="/projects">Projects</NavLink>
                                <NavLink href="/solutions">Solutions</NavLink>
                                <NavLink href="/blog">Blog</NavLink>
                            </nav>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>

            <div className="w-full flex-1 md:w-auto md:flex-none">
                {/* You can add a search bar or other elements here if you want */}
            </div>
            
            <Link href="/" className="flex items-center space-x-2 md:hidden">
                <Mountain className="h-6 w-6 text-primary" />
                <span className="font-bold text-lg text-primary">Nurox.dev</span>
            </Link>

            <nav className="hidden md:flex gap-2">
               {/* Future buttons can go here */}
            </nav>
        </div>
      </div>
    </header>
  );
}
