import { Bot, BarChartBig, ScanLine, ShieldCheck, type LucideIcon } from 'lucide-react';

export interface Solution {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const solutions: Solution[] = [
  {
    icon: Bot,
    title: "AI-Powered Chatbots",
    description: "Enhance customer engagement with intelligent, 24/7 automated support that learns from every interaction.",
  },
  {
    icon: BarChartBig,
    title: "Predictive Analytics",
    description: "Leverage your data to forecast trends, optimize operations, and make proactive, data-driven decisions.",
  },
  {
    icon: ScanLine,
    title: "Automated Document Processing",
    description: "Extract and process information from documents instantly, reducing manual effort and eliminating errors.",
  },
  {
    icon: ShieldCheck,
    title: "Advanced Fraud Detection",
    description: "Protect your business with our AI that identifies and flags suspicious activities in real-time.",
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
