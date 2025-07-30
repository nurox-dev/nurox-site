import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, Code, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: Bot,
    title: "AI-Powered Automation",
    description: "We build intelligent systems that automate repetitive tasks, from customer support chatbots to complex operational workflows, freeing up your team to focus on strategic initiatives.",
  },
  {
    icon: Code,
    title: "Custom Software Development",
    description: "Our team designs and develops bespoke web and mobile applications tailored to your specific business needs, ensuring a perfect fit and a seamless user experience.",
  },
  {
    icon: ShieldCheck,
    title: "Ongoing Support & Optimization",
    description: "Our commitment extends beyond launch. We provide continuous maintenance, support, and optimization to ensure your solutions remain secure, efficient, and future-ready.",
  },
]

export default function WhatWeDo() {
  return (
    <section id="what-we-do" className="py-20 md:py-28 bg-transparent">
        <div className="container mx-auto px-4">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                    What We Do
                </h2>
                <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
                    We build intelligent solutions to propel your business forward.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                    <Card key={index} className="bg-card/60 backdrop-blur-lg border-white/20 shadow-lg text-center">
                        <CardHeader className="items-center">
                            <div className="p-4 bg-primary/10 rounded-full mb-4">
                                <feature.icon className="h-10 w-10 text-primary" />
                            </div>
                            <CardTitle className="text-xl">{feature.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">{feature.description}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    </section>
  )
}
