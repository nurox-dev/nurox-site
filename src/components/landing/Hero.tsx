import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative bg-transparent py-20 md:py-32">
       <Image
          src="/images/homepgbg.jpg"
          alt="AI assistant working at a desk"
          fill
          className="object-cover"
          data-ai-hint="robot assistant"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl [text-shadow:0_4px_8px_rgba(0,0,0,0.7)]">
            Automate Your Business With AI
          </h1>
          <p className="mt-6 text-lg text-white/90 md:text-xl [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
            Nurox delivers cutting-edge AI solutions that automate processes,
            uncover insights, and create new opportunities for your business.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button asChild size="lg" className="rounded-full" variant="glass">
              <Link href="/solutions">Contact Us</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full shadow-lg hover:shadow-xl transition-shadow">
              <Link href="/solutions">Learn More</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
