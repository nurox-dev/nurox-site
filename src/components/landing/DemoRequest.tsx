
"use client";

import { useState, useTransition } from "react";
import { useToast } from "@/hooks/use-toast";
import { submitDemoRequest, type DemoRequestState } from "@/lib/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2 } from "lucide-react";

function SubmitButton({ isPending }: { isPending: boolean }) {
  return (
    <Button type="submit" className="w-full" size="lg" disabled={isPending}>
      {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
      Submit Request
    </Button>
  );
}

export default function DemoRequest() {
  const { toast } = useToast();
  const [isPending, startTransition] = useTransition();
  const [state, setState] = useState<DemoRequestState>({ message: "", errors: {}, success: false });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    startTransition(async () => {
      const result = await submitDemoRequest(formData);
      setState(result);

      if (result.success) {
        toast({
          title: "Success!",
          description: result.message,
        });
        // Optionally reset the form
        event.currentTarget.reset();
      } else if (result.errors) {
        const errorDescription = Object.values(result.errors)
          .flat()
          .join(" \n");

        toast({
          variant: "destructive",
          title: "Please correct the errors",
          description: errorDescription || result.message,
        });
      }
    });
  };


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
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" name="name" placeholder="John Doe" required />
                {state.errors?.name && (
                  <p className="text-sm font-medium text-destructive">
                    {state.errors.name.join(", ")}
                  </p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Work Email</Label>
                <Input id="email" name="email" type="email" placeholder="john.doe@example.com" required />
                 {state.errors?.email && (
                  <p className="text-sm font-medium text-destructive">
                    {state.errors.email.join(", ")}
                  </p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Tell us about your needs</Label>
                <Textarea id="message" name="message" placeholder="I'm interested in..." required minLength={10} />
                 {state.errors?.message && (
                  <p className="text-sm font-medium text-destructive">
                    {state.errors.message.join(", ")}
                  </p>
                )}
              </div>
              <SubmitButton isPending={isPending} />
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
