import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MenuGrid } from "@/components/menu/MenuGrid";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { MenuBanner } from "@/components/menu/MenuBanner";
import heroStyles from "@/components/menu/MenuHero.module.css";
import Image from "next/image";

export const metadata = {
    title: "Our Menu | Authentic Indian Chai & Snacks",
    description: "Explore our wide range of chai blends, from classic Masala Chai to signature Saffron Gold.",
};

export default function MenuPage() {
    return (
        <main>
            <Navbar />
            <div style={{ paddingTop: '80px' }}> {/* Offset fixed header */}
                <MenuBanner />
                <SectionWrapper className="bg-surface">
                    <div className={heroStyles.heroContainer}>
                        <div className={heroStyles.textContent}>
                            <h1 className={heroStyles.title}>Our Menu</h1>
                            <p className={heroStyles.subtitle}>
                                Hand-crafted blends made with love and tradition. 
                                Discover our signature collection of authentic Indian teas and artisanal snacks.
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
                <SectionWrapper>
                    <MenuGrid />
                </SectionWrapper>
            </div>
            <Footer />
        </main>
    );
}
