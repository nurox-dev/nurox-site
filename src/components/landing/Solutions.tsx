"use client";

import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { solutions } from "@/lib/data/solutions";
import { cn } from "@/lib/utils";

export default function Solutions() {
  return (
    <section id="solutions" className="py-20 md:py-28 bg-transparent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Our Services      
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {solutions.map((solution, index) => (
            <div
              key={solution.title}
            >
              <Card className="text-center transition-all duration-300 hover:-translate-y-2 h-full bg-gradient-to-br from-green-500/20 to-purple-500/20 backdrop-blur-lg border-white/20 shadow-lg hover:shadow-2xl hover:from-green-500/30 hover:to-purple-500/30">
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
