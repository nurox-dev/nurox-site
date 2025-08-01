import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function DemoRequest() {

  return (
    <section id="demo" className="py-20 md:py-28">
        <div className="container mx-auto px-4">
            <Card className="max-w-2xl mx-auto">
                <CardHeader className="text-center">
                    <CardTitle className="text-3xl md:text-4xl">Request a Demo</CardTitle>
                    <CardDescription className="text-lg">
                        Let's explore how we can help you grow. Fill out the form, and we'll get in touch.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form className="space-y-6">
                        <div className="space-y-2">
                            <Label htmlFor="name">Full Name</Label>
                            <Input id="name" name="name" placeholder="John Doe" required />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="email">Work Email</Label>
                            <Input id="email" name="email" type="email" placeholder="john.doe@example.com" required />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="message">Tell us about your needs</Label>
                            <Textarea id="message" name="message" placeholder="I'm interested in..." required minLength={10} />
                        </div>
                        <Button type="submit" className="w-full" size="lg">Submit Request</Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    </section>
  );
}
