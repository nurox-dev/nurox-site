import Hero from "@/components/landing/Hero";
import Blog from "@/components/landing/Blog";
import Projects from "@/components/landing/Projects";
import Solutions from "@/components/landing/Solutions";
import WhatWeDo from "@/components/landing/WhatWeDo";

export default function Home() {
  return (
    <>
      <Hero />
      <WhatWeDo />
      <Solutions />
      <Projects />
      <Blog />
    </>
  );
}
