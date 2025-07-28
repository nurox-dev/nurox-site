"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { solutions } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function Solutions() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="solutions" className="py-20 md:py-28 bg-primary/5" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Tailored AI Solutions for Your Business
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            We solve complex challenges with powerful, purpose-built AI technologies.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {solutions.map((solution, index) => (
            <div
              key={solution.title}
              className={cn(
                "transition-all duration-700 ease-out",
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <Card className="text-center transition-all duration-300 hover:-translate-y-2 h-full bg-card/60 backdrop-blur-lg border-white/20 hover:shadow-2xl hover:shadow-accent/20">
                <CardHeader className="items-center">
                  <div className="p-4 bg-primary/10 rounded-full mb-4">
                    <solution.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle>{solution.title}</CardTitle>
                  <CardDescription className="pt-2">{solution.description}</CardDescription>
                </CardHeader>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
