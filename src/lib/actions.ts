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
