import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MenuGrid } from "@/components/menu/MenuGrid";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { MenuBanner } from "@/components/menu/MenuBanner";
import { MenuPhilosophy } from "@/components/menu/MenuPhilosophy";
import heroStyles from "@/components/menu/MenuHero.module.css";
import Image from "next/image";

export const metadata = {
    title: "Our Menu | Authentic Indian Chai & Snacks",
    description: "Explore our wide range of chai blends, from classic Masala Chai to signature Saffron Gold.",
};

import { MenuPairings } from "@/components/menu/MenuPairings";

export default function MenuPage() {
    return (
        <main>
            <Navbar />
            <div className="navbar-offset">
                <MenuBanner />
                <SectionWrapper className="bg-surface" style={{ paddingBottom: '0' }}>
                    <div className={heroStyles.heroContainer}>
                        <div className={heroStyles.textContent}>
                            <h1 className={heroStyles.title}>Our Menu</h1>
                            <p className={heroStyles.subtitle}>
                                Step into a world where every sip tells a story of tradition. 
                                From the misty gardens of Assam to our artisanal spice blends, we curate 
                                a journey through the heart of Indian tea culture. Discover our signature 
                                collection of hand-crafted chai and street-side favorites, reimagined 
                                with a modern touch of luxury.
                            </p>
                        </div>
                        <div className={heroStyles.imageContent}>
                            <div className={heroStyles.imageWrapper}>
                                <Image 
                                    src="/images/menu-hero.png" 
                                    alt="Authentic Masala Chai" 
                                    width={600} 
                                    height={600} 
                                    className={heroStyles.image}
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </SectionWrapper>
                <MenuPhilosophy />
                <MenuPairings />
                <SectionWrapper style={{ paddingTop: '0' }}>
                    <MenuGrid />
                </SectionWrapper>
            </div>
            <Footer />
        </main>
    );
}
