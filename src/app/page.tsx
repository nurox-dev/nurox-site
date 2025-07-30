import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Footer from "@/components/landing/Footer";
import Blog from "@/components/landing/Blog";
import Projects from "@/components/landing/Projects";
import Solutions from "@/components/landing/Solutions";
import DemoRequest from "@/components/landing/DemoRequest";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Hero />
        <Solutions />
        <Projects />
        <Blog />
        <DemoRequest />
      </main>
      <Footer />
    </div>
  );
}
