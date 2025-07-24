import { integrationSteps } from "@/lib/data";
import Image from "next/image";

export default function IntegrationProcess() {
  return (
    <section id="process" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Your Journey to AI Transformation
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            We follow a proven, four-step process to ensure a seamless and successful AI integration.
          </p>
        </div>
        <div className="relative">
           <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 -translate-y-1/2">
             <div className="w-full h-full bg-repeat-x bg-center" style={{backgroundImage: 'linear-gradient(to right, hsl(var(--border)) 50%, transparent 50%)', backgroundSize: '16px 2px'}}></div>
          </div>

          <div className="grid grid-cols-1 gap-12 md:grid-cols-4 md:gap-8">
            {integrationSteps.map((step, index) => (
              <div key={step.step} className="relative flex flex-col items-center text-center p-4 rounded-lg transition-all duration-300 hover:bg-secondary/50">
                <div className="relative z-10 w-full h-40 mb-4 rounded-lg overflow-hidden">
                    <Image src={step.imageUrl} alt={step.title} layout="fill" objectFit="cover" data-ai-hint={step.dataAiHint} />
                    <div className="absolute inset-0 bg-primary/30"></div>
                     <div className="absolute top-4 left-4 flex items-center justify-center w-12 h-12 bg-primary text-primary-foreground rounded-full text-2xl font-bold border-4 border-background">
                        {step.step}
                    </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
