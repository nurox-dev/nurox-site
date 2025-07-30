export interface Project {
    slug: string;
    title: string;
    description: string;
    imageUrls: string[];
    dataAiHint: string;
}

export const projects: Project[] = [
    {
        slug: "ecommerce-ai-search",
        title: "E-commerce AI Search",
        description: "An intelligent search engine for an e-commerce platform that understands natural language queries, leading to a 20% increase in conversion rates.",
        imageUrls: [
            "https://placehold.co/800x600.png?text=Search+1",
            "https://placehold.co/800x600.png?text=Search+2",
            "https://placehold.co/800x600.png?text=Search+3",
        ],
        dataAiHint: "online shopping",
    },
    {
        slug: "healthcare-predictive-maintenance",
        title: "Healthcare Predictive Maintenance",
        description: "A system that predicts equipment failure in hospitals, reducing downtime and improving patient care.",
        imageUrls: [
            "https://placehold.co/800x600.png?text=Healthcare+1",
            "https://placehold.co/800x600.png?text=Healthcare+2",
            "https://placehold.co/800x600.png?text=Healthcare+3",
        ],
        dataAiHint: "hospital equipment",
    },
    {
        slug: "financial-fraud-detection",
        title: "Financial Fraud Detection",
        description: "A real-time fraud detection system for a major bank, which has saved millions by identifying and flagging suspicious transactions.",
        imageUrls: [
            "https://placehold.co/800x600.png?text=Finance+1",
            "https://placehold.co/800x600.png?text=Finance+2",
            "https://placehold.co/800x600.png?text=Finance+3",
        ],
        dataAiHint: "bank security",
    },
    {
        slug: "automated-customer-support",
        title: "Automated Customer Support",
        description: "A chatbot for a telecom company that handles 80% of customer queries, improving response times and customer satisfaction.",
        imageUrls: [
            "https://placehold.co/800x600.png?text=Support+1",
            "https://placehold.co/800x600.png?text=Support+2",
            "https://placehold.co/800x600.png?text=Support+3",
        ],
        dataAiHint: "customer service",
    }
];
