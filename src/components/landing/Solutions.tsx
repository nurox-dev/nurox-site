import { solutions } from "@/lib/solutions";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function Solutions() {
    return (
        <section id="solutions" className="py-20 md:py-28 bg-transparent">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                        Our AI-Powered Solutions
                    </h2>
                </div>
                <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-8">
                    {solutions.map((solution) => (
                        <Link key={solution.slug} href={`/solutions/${solution.slug}`} className="block h-full group">
                            <Card className="flex flex-col text-center justify-center transition-all duration-300 group-hover:-translate-y-2 h-full bg-gradient-to-br from-green-500/20 to-purple-500/20 backdrop-blur-lg border-white/20 shadow-lg group-hover:shadow-2xl group-hover:from-green-500/30 group-hover:to-purple-500/30 p-4 md:p-6">
                                <CardHeader className="items-center p-0">
                                    <div className="p-3 bg-primary/10 rounded-full mb-3">
                                        <solution.icon className="h-6 w-6 md:h-8 md:w-8 text-primary" />
                                    </div>
                                    <CardTitle className="text-base md:text-lg">{solution.title}</CardTitle>
                                </CardHeader>
                            </Card>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
