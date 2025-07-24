import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { solutions } from "@/lib/data";

export default function Solutions() {
  return (
    <section id="solutions" className="py-20 md:py-28 bg-background">
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
          {solutions.map((solution) => (
            <Card key={solution.title} className="text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
              <CardHeader className="items-center">
                <div className="p-4 bg-primary/10 rounded-full mb-4">
                  <solution.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>{solution.title}</CardTitle>
                <CardDescription className="pt-2">{solution.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
