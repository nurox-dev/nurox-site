import Footer from "@/components/landing/Footer";
import Header from "@/components/landing/Header";
import ProjectCard from "@/components/landing/ProjectCard";
import { projects } from "@/lib/data";

export default function ProjectsPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1">
                <section id="projects" className="py-20 md:py-28 bg-primary/5">
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
                                <ProjectCard key={index} project={project} />
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}
