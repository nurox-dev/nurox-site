import Footer from "@/components/landing/Footer";
import Header from "@/components/landing/Header";
import { projects } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export default function DemoPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1">
                <section id="demo" className="py-20 md:py-28 bg-primary/5">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
                                Our Projects
                            </h1>
                            <p className="mt-4 max-w-3xl mx-auto text-xl text-muted-foreground">
                                Here are some examples of the innovative solutions we've delivered for our clients.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {projects.map((project, index) => (
                                <Card key={index} className="flex flex-col overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 group">
                                    <div className="relative w-full h-64">
                                        <Image
                                            src={project.imageUrl}
                                            alt={project.title}
                                            fill
                                            style={{ objectFit: "cover" }}
                                            className="transition-transform duration-300 group-hover:scale-105"
                                            data-ai-hint={project.dataAiHint}
                                        />
                                    </div>
                                    <CardHeader>
                                        <CardTitle>{project.title}</CardTitle>
                                        <CardDescription>{project.description}</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="flex flex-wrap gap-2">
                                            {project.tags.map(tag => (
                                                <Badge key={tag} variant="secondary">{tag}</Badge>
                                            ))}
                                        </div>
                                    </CardContent>
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
