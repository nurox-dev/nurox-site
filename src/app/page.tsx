import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Solutions from "@/components/landing/Solutions";
import Footer from "@/components/landing/Footer";
import Blog from "@/components/landing/Blog";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Hero />
        <Solutions />
        <Blog />
      </main>
      <Footer />
    </div>
  );
}
