import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative bg-background py-20 md:py-32">
       <Image
          src="https://placehold.co/1920x1080.png"
          alt="Abstract background"
          fill
          style={{objectFit:"cover"}}
          className="opacity-10"
          data-ai-hint="abstract blue"
        />
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-extrabold tracking-tight text-primary-foreground md:text-5xl lg:text-6xl">
            Unlock Business Growth with Intelligent AI
          </h1>
          <p className="mt-6 text-lg md:text-xl text-foreground/80">
            Nurox delivers cutting-edge AI solutions that automate processes,
            uncover insights, and create new opportunities for your business.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button asChild size="lg" className="rounded-full shadow-lg hover:shadow-xl transition-shadow">
              <Link href="#demo-request">Contact Us</Link>
            </Button>
            <Button asChild size="lg" variant="secondary" className="rounded-full bg-card hover:bg-card/90 shadow-lg hover:shadow-xl transition-shadow">
              <Link href="/solutions">Learn More</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
