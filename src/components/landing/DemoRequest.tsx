"use client";

import { useEffect, useActionState } from "react";
import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { submitDemoRequest, type DemoRequestState } from "@/lib/actions";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";

function SubmitButton() {
    const { pending } = useFormStatus();
    return (
        <Button type="submit" disabled={pending} className="w-full">
            {pending ? (
                <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Submitting...
                </>
            ) : (
                'Submit Request'
            )}
        </Button>
    )
}

const initialState: DemoRequestState = { status: null, message: null };

export default function DemoRequest() {
  const { toast } = useToast();
  const [state, formAction] = useActionState(submitDemoRequest, initialState);

  useEffect(() => {
    if (state.status === "success") {
      toast({
        title: "Success!",
        description: state.message,
      });
    } else if (state.status === "error") {
      toast({
        title: "Error",
        description: state.message,
        variant: "destructive",
      });
    }
  }, [state, toast]);

  return (
    <section id="demo-request" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="max-w-md">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              See Nurox in Action
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Ready to see how our AI solutions can revolutionize your business? Schedule a personalized demo with one of our experts today.
            </p>
            <p className="mt-4 text-muted-foreground">
              Fill out the form, and we'll get in touch to arrange a time that works for you.
            </p>
          </div>
          <div>
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle>Request a Demo</CardTitle>
                <CardDescription>
                  Let's explore how we can help you grow.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form action={formAction} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" name="name" placeholder="John Doe" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Work Email</Label>
                    <Input id="email" name="email" type="email" placeholder="john.doe@company.com" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Tell us about your needs (optional)</Label>
                    <Textarea id="message" name="message" placeholder="We're interested in..." />
                  </div>
                  <SubmitButton />
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
