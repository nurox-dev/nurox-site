"use server";

import { z } from "zod";

const demoRequestSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
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
        const errorMessage = validatedFields.error.issues.map((issue) => issue.message).join(", ");
        return {
            status: "error",
            message: errorMessage,
        };
    }

    try {
        // Here you would typically send the data to your CRM, email service, or database.
        // For this example, we'll just simulate a successful submission.
        console.log("Demo Request Submitted:", validatedFields.data);

        return {
            status: "success",
            message: "Your demo request has been submitted successfully. We'll be in touch shortly!",
        };
    } catch (error) {
        console.error("Demo request submission failed:", error);
        return {
            status: "error",
            message: "Something went wrong. Please try again later.",
        };
    }
}