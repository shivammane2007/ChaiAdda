import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { StoryHero } from "@/components/story/StoryHero";
import { ProcessTimeline } from "@/components/story/ProcessTimeline";

export const metadata = {
    title: "Our Story | 40 Years of Brewing Tradition",
    description: "Discover the heritage behind Chai Brand. From a small stall in Mumbai to a global chai revolution.",
};

export default function StoryPage() {
    return (
        <main>
            <Navbar />
            <StoryHero />
            <ProcessTimeline />
            <Footer />
        </main>
    );
}
