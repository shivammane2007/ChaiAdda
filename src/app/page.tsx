import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { Philosophy } from "@/components/home/Philosophy";
import { FranchiseTeaser } from "@/components/home/FranchiseTeaser";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Philosophy />
      {/* 
        TODO: 
        - Best Sellers 
        - USP Section
        - Visual Storytelling 
      */}
      <FranchiseTeaser />
      <Footer />
    </main>
  );
}
