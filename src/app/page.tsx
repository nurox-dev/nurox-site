import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Solutions from "@/components/landing/Solutions";
import Faq from "@/components/landing/Faq";
import Footer from "@/components/landing/Footer";
import IntegrationProcess from "@/components/landing/IntegrationProcess";
import Blog from "@/components/landing/Blog";
import Demos from "@/components/landing/Demos";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Hero />
        <Solutions />
        <Demos />
        <IntegrationProcess />
        <Blog />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}
