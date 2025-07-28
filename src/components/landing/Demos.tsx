import { projects } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

export default function Demos() {
    return (
        <section id="demos" className="py-20 md:py-28 bg-primary/5">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                        Our Projects in Action
                    </h2>
                    <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
                        Here are some examples of the innovative solutions we've delivered for our clients.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.slice(0, 2).map((project, index) => (
                        <Card key={index} className="flex flex-col overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 group bg-card hover:scale-105">
                            <div className="relative w-full h-64">
                                <Image
                                    src={project.imageUrl}
                                    alt={project.title}
                                    fill
                                    style={{ objectFit: "cover" }}
                                    className="transition-transform duration-300 group-hover:scale-110"
                                    data-ai-hint={project.dataAiHint}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                <div className="absolute bottom-0 left-0 p-6">
                                     <CardTitle className="text-white text-2xl">{project.title}</CardTitle>
                                </div>
                            </div>
                           
                            <CardContent className="flex-grow flex flex-col p-6">
                                <CardDescription className="flex-grow">{project.description}</CardDescription>
                                <Button asChild className="mt-6 self-start">
                                    <Link href="/demo">
                                        View Project <ArrowRight className="ml-2 h-4 w-4" />
                                    </Link>
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
                 <div className="text-center mt-12">
                    <Button asChild variant="outline" size="lg">
                        <Link href="/demo">
                            View All Projects
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
