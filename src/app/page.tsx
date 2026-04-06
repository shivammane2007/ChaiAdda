import dynamic from "next/dynamic";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/home/Hero";

// Below-fold: dynamically imported to split JS bundle
const Philosophy    = dynamic(() => import("@/components/home/Philosophy").then(m => ({ default: m.Philosophy })));
const BestSellers   = dynamic(() => import("@/components/home/BestSellers").then(m => ({ default: m.BestSellers })));
const AddaCulture   = dynamic(() => import("@/components/home/AddaCulture").then(m => ({ default: m.AddaCulture })));
const FeaturesSection = dynamic(() => import("@/components/home/FeaturesSection").then(m => ({ default: m.FeaturesSection })));
const Footer        = dynamic(() => import("@/components/layout/Footer").then(m => ({ default: m.Footer })));

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

