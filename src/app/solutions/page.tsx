import Footer from "@/components/landing/Footer";
import Header from "@/components/landing/Header";
import { solutions } from "@/lib/solutions";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SolutionsPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1">
                 <section id="solutions" className="py-20 md:py-28 bg-transparent">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                        <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
                            Our AI-Powered Solutions
                        </h1>
                        <p className="mt-4 max-w-3xl mx-auto text-xl text-muted-foreground">
                            We provide a suite of intelligent tools designed to solve your most complex business challenges, drive efficiency, and unlock new opportunities for growth.
                        </p>
                        </div>
                        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                            {solutions.map((solution) => (
                                <Link key={solution.slug} href={`/solutions/${solution.slug}`} className="block h-full group">
                                    <Card className="flex flex-col text-center transition-all duration-300 group-hover:-translate-y-2 h-full bg-gradient-to-br from-green-500/20 to-purple-500/20 backdrop-blur-lg border-white/20 shadow-lg group-hover:shadow-2xl group-hover:from-green-500/30 group-hover:to-purple-500/30">
                                        <CardHeader className="items-center">
                                        <div className="p-4 bg-primary/10 rounded-full mb-4">
                                            <solution.icon className="h-8 w-8 text-primary" />
                                        </div>
                                        <CardTitle>{solution.title}</CardTitle>
                                        </CardHeader>
                                        <CardContent className="flex-grow">
                                        </CardContent>
                                        <CardFooter>
                                            <div className="flex justify-end w-full">
                                                <ArrowRight className="h-6 w-6 text-primary opacity-70 group-hover:opacity-100 transition-opacity" />
                                            </div>
                                        </CardFooter>
                                    </Card>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}
