import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import SuccessStories from "@/components/landing/SuccessStories";
import IntegrationProcess from "@/components/landing/IntegrationProcess";
import Faq from "@/components/landing/Faq";
import DemoRequest from "@/components/landing/DemoRequest";
import Footer from "@/components/landing/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Hero />
        <SuccessStories />
        <IntegrationProcess />
        <Faq />
        <DemoRequest />
      </main>
      <Footer />
    </div>
  );
}
