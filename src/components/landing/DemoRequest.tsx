"use client";

import { useEffect, useRef } from "react";
import { useActionState } from "react";
import { useToast } from "@/hooks/use-toast";
import { submitDemoRequest, type DemoRequestState } from "@/lib/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const initialState: DemoRequestState = {
  message: null,
  status: null,
};

export default function DemoRequest() {
  const { toast } = useToast();
  const [state, formAction] = useActionState(submitDemoRequest, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.status === "success") {
      toast({
        title: "Success!",
        description: state.message,
      });
      formRef.current?.reset();
    } else if (state.status === "error") {
      toast({
        title: "Error",
        description: state.message,
        variant: "destructive",
      });
    }
  }, [state, toast]);

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
                    <form ref={formRef} action={formAction} className="space-y-6">
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