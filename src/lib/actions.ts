
"use server";

import { z } from "zod";

const demoRequestSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

export type DemoRequestState = {
  message: string;
  errors?: {
    name?: string[];
    email?: string[];
    message?: string[];
  };
  success?: boolean;
};

export async function submitDemoRequest(
  formData: FormData
): Promise<DemoRequestState> {
  const validatedFields = demoRequestSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    return {
      message: "Validation failed. Please check the fields.",
      errors: validatedFields.error.flatten().fieldErrors,
      success: false,
    };
  }

  try {
    // In a real application, you would send this data to a CRM, email service, or database.
    // For this demo, we'll just log it to the console.
    console.log("New Demo Request Submitted:");
    console.log("Name:", validatedFields.data.name);
    console.log("Email:", validatedFields.data.email);
    console.log("Message:", validatedFields.data.message);

    // Simulate an API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    return {
      message: "Thank you! Your request has been submitted successfully.",
      success: true,
      errors: {},
    };
  } catch (error) {
    console.error("Demo request submission error:", error);
    return {
      message: "An unexpected error occurred. Please try again later.",
      success: false,
    };
  }
}
