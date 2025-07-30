import { type LucideIcon, Phone, Globe, Smartphone, Bot, Zap, ShieldCheck } from 'lucide-react';

export interface Solution {
  icon: LucideIcon;
  title: string;
  description: string;
  detailedDescription: string;
  imageUrl: string;
  dataAiHint: string;
}

export const solutions: Solution[] = [
  {
    icon: Phone,
    title: "AI Receptionist",
    description: "Let AI handle your front desk – from calls to appointments and bookings, effortlessly!",
    detailedDescription: "Our AI Receptionist provides a seamless experience for your customers by handling incoming calls, answering frequently asked questions, and scheduling appointments. It integrates directly with your calendar, ensuring your front desk is efficient and professional 24/7.",
    imageUrl: "/images/assistant.jpg",
    dataAiHint: "document scanning",
  },
  {
    icon: Globe,
    title: "Web Development",
    description: "Modern website with sleek design, built for your business.",
    detailedDescription: "Our expert team provides end-to-end web development services, from initial concept to deployment and beyond. We build responsive, secure, and user-friendly websites and applications that deliver a superior digital experience and drive business growth.",
    imageUrl: "/images/webdev.jpg",
    dataAiHint: "analytics dashboard",
  },
  {
    icon: Smartphone,
    title: "App Development",
    description: "Create powerful and intuitive mobile apps for iOS and Android that your users will love.",
    detailedDescription: "From concept to launch, we build native and cross-platform mobile applications that are fast, responsive, and engaging. Our team ensures your app is not only functional but also provides an exceptional user experience that aligns with your brand and business objectives.",
    imageUrl: "/images/app.jpg",
    dataAiHint: "mobile app",
  },
  {
    icon: Bot,
    title: "AI-Powered Chatbots",
    description: "Enhance customer engagement with intelligent, 24/7 automated support that learns from every interaction.",
    detailedDescription: "Our custom-built chatbots go beyond simple scripts. They integrate with your knowledge base, understand user intent, and provide personalized responses. This frees up your human agents to handle high-priority issues, leading to increased efficiency and happier customers.",
    imageUrl: "/images/chatbot.jpeg",
    dataAiHint: "chatbot interface",
  },
  {
    icon: Zap,
    title: "AI-Powered Automation Workflows",
    description: "Streamline your unique business processes with tailor-made AI automation solutions for maximum efficiency.",
    detailedDescription: "We identify bottlenecks and repetitive tasks in your operations and build custom AI-driven workflows to automate them. From data entry and processing to complex decision-making, our solutions are designed to save you time, reduce errors, and free up your team to focus on high-value activities.",
    imageUrl: "/images/workflow.jpg",
    dataAiHint: "automation process",
  },
  {
    icon: ShieldCheck,
    title: "Maintenance and Continuous Support",
    description: "Peace of mind, built in. Our support keeps your solutions fast, safe, and future-ready.",
    detailedDescription: "Our commitment doesn't end at launch. We provide comprehensive maintenance and support packages to ensure your solutions remain secure, up-to-date, and optimized for peak performance. Our dedicated team offers proactive monitoring and continuous improvement, adapting to your evolving needs and ensuring your long-term success.",
    imageUrl: "/images/maintenance .jpg",
    dataAiHint: "security shield",
  },
];
