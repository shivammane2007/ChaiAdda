import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { StoryHero } from "@/components/story/StoryHero";
import { ProcessTimeline } from "@/components/story/ProcessTimeline";
import { StoryValues } from "@/components/story/StoryValues";
import { StoryModern } from "@/components/story/StoryModern";

export const metadata = {
    title: "Our Story | 40 Years of Brewing Tradition",
    description: "Discover the heritage behind ChaiAdda. From a small stall in Mumbai to a global chai revolution.",
};

export default function StoryPage() {
    return (
        <main>
            <Navbar />
            <div className="navbar-offset">
                <StoryHero />
                <StoryValues />
                <ProcessTimeline />
                <StoryModern />
            </div>
            <Footer />
        </main>
    );
}
