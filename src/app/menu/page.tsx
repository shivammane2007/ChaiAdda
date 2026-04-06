import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MenuGrid } from "@/components/menu/MenuGrid";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { MenuBanner } from "@/components/menu/MenuBanner";

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
                <SectionWrapper className="bg-surface text-center pb-0">
                    <h1 style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: '48px',
                        marginBottom: '16px'
                    }}>Our Menu</h1>
                    <p style={{ opacity: 0.8, maxWidth: '600px', margin: '0 auto' }}>
                        Hand-crafted blends made with love and tradition.
                    </p>
                </SectionWrapper>
                <SectionWrapper>
                    <MenuGrid />
                </SectionWrapper>
            </div>
            <Footer />
        </main>
    );
}
