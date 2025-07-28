import { projects } from "@/lib/data";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import ProjectCard from "./ProjectCard";

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
                       <ProjectCard key={index} project={project} />
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
