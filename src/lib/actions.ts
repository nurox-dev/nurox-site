"use server";

import { z } from "zod";

const demoRequestSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }).optional(),
});

export type DemoRequestState = {
  message: string;
  status: "success" | "error";
} | {
    message: null;
    status: null;
};


export async function submitDemoRequest(
  prevState: DemoRequestState,
  formData: FormData
): Promise<DemoRequestState> {
  const validatedFields = demoRequestSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    return {
      message: validatedFields.error.flatten().fieldErrors.email?.[0] || validatedFields.error.flatten().fieldErrors.name?.[0] || "Invalid data.",
      status: "error",
    };
  }

  try {
    // Here you would typically send an email or save to a database.
    // We'll simulate a successful submission.
    console.log("Demo Request Submitted:", validatedFields.data);
    return { message: "Thank you! Your demo request has been received. We'll be in touch shortly.", status: "success" };
  } catch (e) {
    return { message: "Something went wrong. Please try again.", status: "error" };
  }
}
