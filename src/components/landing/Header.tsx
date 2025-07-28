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
    <header className="sticky top-0 z-50 w-full">
      <div className="container flex h-14 max-w-screen-2xl items-center rounded-b-2xl border-x border-b border-white/20 bg-white/10 backdrop-blur-lg shadow-lg">
        <div className="mr-4 flex items-center">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Mountain className="h-6 w-6 text-primary" />
            <span className="font-bold sm:inline-block text-lg">Nurox</span>
          </Link>
          <nav className="hidden gap-6 text-sm md:flex">
            <NavLink href="/demo">Demo</NavLink>
            <NavLink href="/solutions">Solutions</NavLink>
            <NavLink href="/blog">Blog</NavLink>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2">
           <Button asChild className="hidden md:flex">
              <Link href="#demo-request">Request a Demo</Link>
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
                            <NavLink href="/demo">Demo</NavLink>
                            <NavLink href="/solutions">Solutions</NavLink>
                            <NavLink href="/blog">Blog</NavLink>
                             <Button asChild>
                                <Link href="#demo-request">Request a Demo</Link>
                             </Button>
                        </nav>
                    </div>
                </SheetContent>
            </Sheet>
        </div>
      </div>
    </header>
  );
}
