import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { Philosophy } from "@/components/home/Philosophy";
import { FeaturesSection } from "@/components/home/FeaturesSection";
import { BestSellers } from "@/components/home/BestSellers";
import { AddaCulture } from "@/components/home/AddaCulture";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Philosophy />
      <BestSellers />
      <AddaCulture />
      <FeaturesSection />
      <Footer />
    </main>
  );
}
