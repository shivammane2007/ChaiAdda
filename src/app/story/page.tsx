import dynamic from "next/dynamic";
import { Navbar } from "@/components/layout/Navbar";
import { StoryHero } from "@/components/story/StoryHero";

// Below-fold — dynamically imported
const StoryValues     = dynamic(() => import("@/components/story/StoryValues").then(m => ({ default: m.StoryValues })));
const ProcessTimeline = dynamic(() => import("@/components/story/ProcessTimeline").then(m => ({ default: m.ProcessTimeline })));
const StoryModern     = dynamic(() => import("@/components/story/StoryModern").then(m => ({ default: m.StoryModern })));
const Footer          = dynamic(() => import("@/components/layout/Footer").then(m => ({ default: m.Footer })));

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

