import { Bot, BarChartBig, Phone, ShieldCheck, Zap, type LucideIcon } from 'lucide-react';

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
    icon: Zap,
    title: "AI-Powered Automation Workflows",
    description: "Streamline your unique business processes with tailor-made AI automation solutions for maximum efficiency.",
    detailedDescription: "We design and implement bespoke AI-driven workflows that automate repetitive tasks, connect disparate systems, and optimize your operations from end to end. From data entry to complex decision-making, our custom solutions are built to fit your specific needs, driving productivity and reducing costs.",
    imageUrl: "https://placehold.co/600x400.png",
    dataAiHint: "automation workflow",
  },
  {
    icon: Phone,
    title: "AI Receptionist",
    description: "Automate your front-desk operations with a smart, conversational AI that manages calls and appointments.",
    detailedDescription: "Our AI Receptionist provides a seamless experience for your customers by handling incoming calls, answering frequently asked questions, and scheduling appointments. It integrates directly with your calendar, ensuring your front desk is efficient and professional 24/7.",
    imageUrl: "https://placehold.co/600x400.png",
    dataAiHint: "document scanning",
  },
  {
    icon: BarChartBig,
    title: "Web Development",
    description: "Build modern, scalable, and high-performance web applications tailored to your business needs.",
    detailedDescription: "Our expert team provides end-to-end web development services, from initial concept to deployment and beyond. We build responsive, secure, and user-friendly websites and applications that deliver a superior digital experience and drive business growth.",
    imageUrl: "https://placehold.co/600x400.png",
    dataAiHint: "analytics dashboard",
  },
  {
    icon: Bot,
    title: "AI-Powered Chatbots",
    description: "Enhance customer engagement with intelligent, 24/7 automated support that learns from every interaction.",
    detailedDescription: "Our custom-built chatbots go beyond simple scripts. They integrate with your knowledge base, understand user intent, and provide personalized responses. This frees up your human agents to handle high-priority issues, leading to increased efficiency and happier customers.",
    imageUrl: "https://placehold.co/600x400.png",
    dataAiHint: "chatbot interface",
  },
  {
    icon: ShieldCheck,
    title: "Maintenance and Continuous Support",
    description: "Protect your business with our AI that identifies and flags suspicious activities in real-time.",
    detailedDescription: "We provide comprehensive maintenance and support packages to ensure your solutions remain secure, up-to-date, and optimized for performance. Our team is dedicated to your long-term success, offering proactive monitoring and continuous improvement to adapt to your evolving needs.",
    imageUrl: "https://placehold.co/600x400.png",
    dataAiHint: "security shield",
  },
];

export interface SuccessStory {
  quote: string;
  clientName: string;
  clientCompany: string;
  avatarUrl: string;
  dataAiHint: string;
}

export const successStories: SuccessStory[] = [
  {
    quote: "Nurox's predictive analytics transformed our inventory management, reducing waste by 30% and boosting profits.",
    clientName: "Jane Doe",
    clientCompany: "Innovate Inc.",
    avatarUrl: "https://placehold.co/100x100.png",
    dataAiHint: "woman portrait"
  },
  {
    quote: "The AI chatbot solution improved our customer satisfaction rates by 40% within three months. It's been a game-changer.",
    clientName: "John Smith",
    clientCompany: "Tech Solutions Ltd.",
    avatarUrl: "https://placehold.co/100x100.png",
    dataAiHint: "man portrait"
  },
  {
    quote: "Automating our document processing with Nurox saved us thousands of hours. Their integration was seamless.",
    clientName: "Emily White",
    clientCompany: "Global Logistics",
    avatarUrl: "https://placehold.co/100x100.png",
    dataAiHint: "woman smiling"
  },
  {
    quote: "The real-time fraud detection system from Nurox is incredibly effective. It has secured our platform and built trust with our users.",
    clientName: "Michael Brown",
    clientCompany: "FinSecure",
    avatarUrl: "https://placehold.co/100x100.png",
    dataAiHint: "man professional"
  },
];

export interface IntegrationStep {
  step: number;
  title: string;
  description: string;
  imageUrl: string;
  dataAiHint: string;
}

export const integrationSteps: IntegrationStep[] = [
    {
        step: 1,
        title: "Discovery & Planning",
        description: "We work with you to understand your unique challenges and goals, crafting a tailored AI strategy.",
        imageUrl: "https://placehold.co/400x300.png",
        dataAiHint: "planning strategy"
    },
    {
        step: 2,
        title: "Data Integration & Model Training",
        description: "Our team securely integrates your data sources and trains our AI models for peak performance.",
        imageUrl: "https://placehold.co/400x300.png",
        dataAiHint: "data server"
    },
    {
        step: 3,
        title: "Seamless Implementation",
        description: "We deploy the AI solution into your existing workflow with minimal disruption to your operations.",
        imageUrl: "https://placehold.co/400x300.png",
        dataAiHint: "code screen"
    },
    {
        step: 4,
        title: "Continuous Optimization & Support",
        description: "We provide ongoing support and continuously refine the AI to ensure long-term success and growth.",
        imageUrl: "https://placehold.co/400x300.png",
        dataAiHint: "team support"
    }
];

export interface BlogPost {
  title: string;
  excerpt: string;
  imageUrl: string;
  dataAiHint: string;
  category: string;
  date: string;
  author: {
    name: string;
    avatarUrl: string;
  };
}

export const blogPosts: BlogPost[] = [
    {
        title: "The Future of AI in Business: 5 Trends to Watch",
        excerpt: "Artificial intelligence is no longer a futuristic concept; it's a present-day reality transforming industries. From machine learning to natural language processing, AI is reshaping how businesses operate. In this post, we'll explore five key trends that are set to define the future of AI in the business world.",
        imageUrl: "https://placehold.co/600x400.png",
        dataAiHint: "AI future",
        category: "AI Trends",
        date: "July 24, 2024",
        author: {
            name: "Alex Johnson",
            avatarUrl: "https://placehold.co/100x100.png"
        }
    },
    {
        title: "How to Prepare Your Data for Machine Learning",
        excerpt: "A successful machine learning model is built on a foundation of high-quality data. But what does 'high-quality' mean, and how do you get there? This guide will walk you through the essential steps of data preparation, from cleaning and formatting to feature engineering, ensuring your ML projects get off to a strong start.",
        imageUrl: "https://placehold.co/600x400.png",
        dataAiHint: "data science",
        category: "Machine Learning",
        date: "July 20, 2024",
        author: {
            name: "Samantha Lee",
            avatarUrl: "https://placehold.co/100x100.png"
        }
    },
    {
        title: "Ethical AI: Navigating the Complexities of Bias and Fairness",
        excerpt: "As AI systems become more integrated into our lives, ensuring they are fair and unbiased is critically important. This article delves into the complexities of ethical AI, discussing common sources of bias, strategies for mitigation, and the importance of transparency and accountability in building AI that benefits everyone.",
        imageUrl: "https://placehold.co/600x400.png",
        dataAiHint: "ethics technology",
        category: "AI Ethics",
        date: "July 15, 2024",
        author: {
            name: "David Chen",
            avatarUrl: "https://placehold.co/100x100.png"
        }
    }
];


export const caseStudies = [
    {
        title: "Case Study: Innovate Inc. Boosts Efficiency with Predictive Analytics",
        url: "#",
        content: "Innovate Inc. struggled with inventory management, leading to overstocking and waste. By implementing Nurox's predictive analytics solution, they were able to forecast demand with 95% accuracy. This led to a 30% reduction in waste and a significant increase in profitability. The solution analyzed sales data, market trends, and seasonal demand to provide actionable insights."
    },
    {
        title: "Case Study: Tech Solutions Ltd. Revolutionizes Customer Service",
        url: "#",
        content: "Tech Solutions Ltd. faced challenges with high call volumes and slow response times. Nurox deployed an AI-powered chatbot that could handle 80% of customer inquiries instantly. This resulted in a 40% improvement in customer satisfaction scores and allowed human agents to focus on complex issues. The chatbot was trained on their specific product documentation and FAQs."
    },
    {
        title: "Case Study: FinSecure Enhances Security with Real-Time Fraud Detection",
        url: "#",
        content: "As a growing fintech platform, FinSecure needed to bolster its security against sophisticated fraud. Nurox's advanced fraud detection system was integrated into their transaction processing pipeline. The AI analyzes transaction patterns in real-time, successfully identifying and blocking over 99% of fraudulent transactions before they could be completed, saving the company millions."
    }
];

export const getCaseStudiesAsString = () => {
    return caseStudies.map(cs => `Title: ${cs.title}\nURL: ${cs.url}\nContent: ${cs.content}`).join('\n\n---\n\n');
}

export const projects = [
    {
        title: "E-commerce AI Search",
        description: "An intelligent search engine for an e-commerce platform that understands natural language queries, leading to a 20% increase in conversion rates.",
        imageUrl: "https://placehold.co/600x400.png",
        dataAiHint: "online shopping",
        tags: ["E-commerce", "AI", "NLP"]
    },
    {
        title: "Healthcare Predictive Maintenance",
        description: "A system that predicts equipment failure in hospitals, reducing downtime and improving patient care.",
        imageUrl: "https://placehold.co/600x400.png",
        dataAiHint: "hospital equipment",
        tags: ["Healthcare", "Predictive Maintenance", "IoT"]
    },
    {
        title: "Financial Fraud Detection",
        description: "A real-time fraud detection system for a major bank, which has saved millions by identifying and flagging suspicious transactions.",
        imageUrl: "https://placehold.co/600x400.png",
        dataAiHint: "bank security",
        tags: ["Finance", "Security", "AI"]
    },
    {
        title: "Automated Customer Support",
        description: "A chatbot for a telecom company that handles 80% of customer queries, improving response times and customer satisfaction.",
        imageUrl: "https://placehold.co/600x400.png",
        dataAiHint: "customer service",
        tags: ["Chatbot", "Customer Support", "Automation"]
    }
];
