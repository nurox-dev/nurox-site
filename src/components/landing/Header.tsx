import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Mountain } from "lucide-react";
import Link from "next/link";

const NavLink = ({ href, children }: { href: string, children: React.ReactNode }) => (
    <Link href={href} className="text-foreground/80 transition-colors hover:text-foreground">
        {children}
    </Link>
);

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 flex items-center">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Mountain className="h-6 w-6 text-primary" />
            <span className="font-bold sm:inline-block text-lg">Nurox</span>
          </Link>
          <nav className="hidden gap-6 text-sm md:flex">
            <NavLink href="/solutions">Solutions</NavLink>
            <NavLink href="/blog">Blog</NavLink>
            <NavLink href="#faq">FAQ</NavLink>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2">
            <Button asChild className="hidden md:inline-flex rounded-full">
                <Link href="#demo">Request a Demo</Link>
            </Button>
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="outline" size="icon" className="md:hidden">
                        <Menu className="h-5 w-5" />
                        <span className="sr-only">Toggle Menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="right">
                    <div className="grid gap-6 p-6">
                        <Link href="/" className="flex items-center space-x-2">
                            <Mountain className="h-6 w-6 text-primary" />
                            <span className="font-bold text-lg">Nurox</span>
                        </Link>
                        <nav className="grid gap-4 text-lg">
                            <NavLink href="/solutions">Solutions</NavLink>
                            <NavLink href="/blog">Blog</NavLink>
                            <NavLink href="#faq">FAQ</NavLink>
                        </nav>
                         <Button asChild className="rounded-full">
                            <Link href="#demo">Request a Demo</Link>
                        </Button>
                    </div>
                </SheetContent>
            </Sheet>
        </div>
      </div>
    </header>
  );
}
