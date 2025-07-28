import { Bot, BarChartBig, Phone, ShieldCheck, Zap, Smartphone, Globe, type LucideIcon } from 'lucide-react';

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
    imageUrl: "https://placehold.co/600x400.png",
    dataAiHint: "document scanning",
  },
  {
    icon: Globe,
    title: "Web Development",
    description: "Modern website with sleek design, built for your business.",
    detailedDescription: "Our expert team provides end-to-end web development services, from initial concept to deployment and beyond. We build responsive, secure, and user-friendly websites and applications that deliver a superior digital experience and drive business growth.",
    imageUrl: "https://placehold.co/600x400.png",
    dataAiHint: "analytics dashboard",
  },
  {
    icon: Smartphone,
    title: "App Development",
    description: "Create powerful and intuitive mobile apps for iOS and Android that your users will love.",
    detailedDescription: "From concept to launch, we build native and cross-platform mobile applications that are fast, responsive, and engaging. Our team ensures your app is not only functional but also provides an exceptional user experience that aligns with your brand and business objectives.",
    imageUrl: "https://placehold.co/600x400.png",
    dataAiHint: "mobile app",
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
    icon: Zap,
    title: "AI-Powered Automation Workflows",
    description: "Streamline your unique business processes with tailor-made AI automation solutions for maximum efficiency.",
    detailedDescription: "We identify bottlenecks and repetitive tasks in your operations and build custom AI-driven workflows to automate them. From data entry and processing to complex decision-making, our solutions are designed to save you time, reduce errors, and free up your team to focus on high-value activities.",
    imageUrl: "https://placehold.co/600x400.png",
    dataAiHint: "automation process",
  },
  {
    icon: ShieldCheck,
    title: "Maintenance and Continuous Support",
    description: "Peace of mind, built in. Our support keeps your solutions fast, safe, and future-ready.",
    detailedDescription: "Our commitment doesn't end at launch. We provide comprehensive maintenance and support packages to ensure your solutions remain secure, up-to-date, and optimized for peak performance. Our dedicated team offers proactive monitoring and continuous improvement, adapting to your evolving needs and ensuring your long-term success.",
    imageUrl: "https://placehold.co/600x400.png",
    dataAiHint: "security shield",
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
  slug: string;
  title: string;
  excerpt: string;
  content: string;
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
        slug: "future-of-ai-in-business",
        title: "The Future of AI in Business: 5 Trends to Watch",
        excerpt: "Artificial intelligence is no longer a futuristic concept; it's a present-day reality transforming industries. From machine learning to natural language processing, AI is reshaping how businesses operate. In this post, we'll explore five key trends that are set to define the future of AI in the business world.",
        content: `
## The Dawn of a New Era

Artificial intelligence is no longer a futuristic concept; it's a present-day reality transforming industries. From machine learning to natural language processing, AI is reshaping how businesses operate. In this post, we'll explore five key trends that are set to define the future of AI in the business world.

### 1. Hyperautomation

Hyperautomation is the idea that if a process can be automated, it should be. This trend goes beyond simple task automation to create a comprehensive, integrated automation fabric across the organization. AI and machine learning are the core drivers of hyperautomation, enabling businesses to automate more complex, long-running processes that require judgment and real-time adaptation.

### 2. Generative AI

From creating realistic images and text to writing code, generative AI is unlocking new creative and operational possibilities. In business, this translates to automated content creation for marketing, synthetic data generation for training other AI models, and even the design of new products. Tools like OpenAI's GPT series have brought this technology to the forefront.

### 3. AI-Augmented Workforce

Rather than replacing humans, AI is increasingly being used to augment their capabilities. This "human-in-the-loop" approach combines human intelligence, creativity, and contextual understanding with AI's speed and data-processing power. This synergy leads to better decision-making, increased efficiency, and more innovative problem-solving.

### 4. AI in Cybersecurity

As cyber threats become more sophisticated, AI is becoming an essential tool in the fight to protect data and systems. AI-powered security systems can analyze vast amounts of data in real-time to detect patterns and anomalies that might indicate a threat. This allows for proactive defense, identifying and neutralizing threats before they can cause significant damage.

### 5. Ethical AI and Explainability (XAI)

With the growing power of AI comes a greater responsibility to use it ethically. There is a rising demand for AI systems that are transparent, fair, and accountable. Explainable AI (XAI) is a set of techniques that allow humans to understand and trust the results and output created by machine learning algorithms. This is crucial for building trust with customers and for regulatory compliance.
        `,
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
        slug: "preparing-data-for-machine-learning",
        title: "How to Prepare Your Data for Machine Learning",
        excerpt: "A successful machine learning model is built on a foundation of high-quality data. But what does 'high-quality' mean, and how do you get there? This guide will walk you through the essential steps of data preparation, from cleaning and formatting to feature engineering, ensuring your ML projects get off to a strong start.",
        content: `
## Garbage In, Garbage Out

This well-known saying in computer science is especially true for machine learning. A successful machine learning model is built on a foundation of high-quality data. But what does 'high-quality' mean, and how do you get there? This guide will walk you through the essential steps of data preparation, from cleaning and formatting to feature engineering, ensuring your ML projects get off to a strong start.

### 1. Data Cleaning

The first step is always to clean your data. This involves handling missing values (e.g., by imputation or removal), correcting inconsistencies, and removing duplicate records. A clean dataset is the bedrock of a reliable model.

### 2. Data Transformation

Data often comes in a raw format that isn't suitable for machine learning. Transformation can include:
- **Normalization/Standardization:** Scaling numeric features to a common range (e.g., 0-1 or with a mean of 0 and standard deviation of 1).
- **Encoding:** Converting categorical variables into a numerical format (e.g., one-hot encoding).

### 3. Feature Engineering

This is often considered the most creative part of data preparation. Feature engineering involves creating new features from existing ones to better represent the underlying patterns in the data for the model. This could be as simple as extracting the day of the week from a date or as complex as combining multiple variables to create a new, more predictive feature.

### 4. Data Splitting

Before training, your dataset must be split into at least two parts: a training set and a testing set. The model learns from the training set, and its performance is evaluated on the unseen testing set. A common split is 80% for training and 20% for testing. Often, a third "validation" set is also used for tuning model hyperparameters.
        `,
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
        slug: "ethical-ai-bias-fairness",
        title: "Ethical AI: Navigating the Complexities of Bias and Fairness",
        excerpt: "As AI systems become more integrated into our lives, ensuring they are fair and unbiased is critically important. This article delves into the complexities of ethical AI, discussing common sources of bias, strategies for mitigation, and the importance of transparency and accountability in building AI that benefits everyone.",
        content: `
## A Double-Edged Sword

As AI systems become more integrated into our lives, ensuring they are fair and unbiased is critically important. The same algorithms that can be used to recommend movies can also be used to make decisions about loans, hiring, and even criminal justice. This article delves into the complexities of ethical AI, discussing common sources of bias, strategies for mitigation, and the importance of transparency and accountability in building AI that benefits everyone.

### Sources of Bias

AI bias can creep in from several sources:
- **Data Bias:** If the data used to train the model reflects existing societal biases, the model will learn and perpetuate them.
- **Algorithmic Bias:** The algorithm itself might be designed in a way that inherently favors certain outcomes.
- **Human Bias:** The developers and users of AI systems can introduce their own conscious or unconscious biases.

### Strategies for Mitigation

Addressing bias requires a multi-faceted approach:
- **Diverse and Representative Data:** Actively work to collect data that is representative of the population the AI will affect.
- **Fairness Metrics:** Use specific metrics to audit and measure the fairness of a model's predictions across different demographic groups.
- **Bias Detection and Correction Tools:** Employ specialized tools and techniques to identify and mitigate bias in both the data and the model.

### The Importance of Transparency

For AI to be trusted, it must be transparent. This means being open about how the AI works, the data it was trained on, and its limitations. Explainable AI (XAI) plays a key role here, providing insights into why a model made a particular decision. Building ethical AI is not just a technical challenge; it's a societal one that requires ongoing dialogue and collaboration.
        `,
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
        imageUrls: [
            "https://placehold.co/600x400.png?text=Search+1",
            "https://placehold.co/600x400.png?text=Search+2",
            "https://placehold.co/600x400.png?text=Search+3",
        ],
        dataAiHint: "online shopping",
    },
    {
        title: "Healthcare Predictive Maintenance",
        description: "A system that predicts equipment failure in hospitals, reducing downtime and improving patient care.",
        imageUrls: [
            "https://placehold.co/600x400.png?text=Healthcare+1",
            "https://placehold.co/600x400.png?text=Healthcare+2",
            "https://placehold.co/600x400.png?text=Healthcare+3",
        ],
        dataAiHint: "hospital equipment",
    },
    {
        title: "Financial Fraud Detection",
        description: "A real-time fraud detection system for a major bank, which has saved millions by identifying and flagging suspicious transactions.",
        imageUrls: [
            "https://placehold.co/600x400.png?text=Finance+1",
            "https://placehold.co/600x400.png?text=Finance+2",
            "https://placehold.co/600x400.png?text=Finance+3",
        ],
        dataAiHint: "bank security",
    },
    {
        title: "Automated Customer Support",
        description: "A chatbot for a telecom company that handles 80% of customer queries, improving response times and customer satisfaction.",
        imageUrls: [
            "https://placehold.co/600x400.png?text=Support+1",
            "https://placehold.co/600x400.png?text=Support+2",
            "https://placehold.co/600x400.png?text=Support+3",
        ],
        dataAiHint: "customer service",
    }
];
