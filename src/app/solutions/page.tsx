import Footer from "@/components/landing/Footer";
import Header from "@/components/landing/Header";
import { solutions } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Image from "next/image";

export default function SolutionsPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1">
                 <section id="solutions" className="py-20 md:py-28 bg-background">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                        <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
                            Our AI-Powered Solutions
                        </h1>
                        <p className="mt-4 max-w-3xl mx-auto text-xl text-muted-foreground">
                            We provide a suite of intelligent tools designed to solve your most complex business challenges, drive efficiency, and unlock new opportunities for growth.
                        </p>
                        </div>
                        <div className="grid grid-cols-1 gap-12">
                            {solutions.map((solution, index) => (
                                <Card key={solution.title} className="flex flex-col md:flex-row overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                                    <div className="w-full md:w-1/3 relative min-h-[250px] md:min-h-0">
                                         <Image 
                                            src={solution.imageUrl} 
                                            alt={solution.title}
                                            fill
                                            style={{ objectFit: "cover" }}
                                            className="transition-transform duration-300 group-hover:scale-105"
                                            data-ai-hint={solution.dataAiHint}
                                        />
                                    </div>
                                    <div className="w-full md:w-2/3">
                                        <CardHeader>
                                            <div className="flex items-center gap-4 mb-2">
                                                <div className="p-3 bg-primary/10 rounded-full">
                                                    <solution.icon className="h-6 w-6 text-primary" />
                                                </div>
                                                <CardTitle className="text-2xl">{solution.title}</CardTitle>
                                            </div>
                                             <CardDescription className="text-base text-muted-foreground leading-relaxed">
                                                {solution.description}
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-foreground/90">{solution.detailedDescription}</p>
                                        </CardContent>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}
