import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FranchiseHero } from "@/components/franchise/FranchiseHero";
import { FranchiseBenefits } from "@/components/franchise/FranchiseBenefits";
import { InvestmentTable } from "@/components/franchise/InvestmentTable";
import { SupportEcosystem } from "@/components/franchise/SupportEcosystem";
import { FranchisePathway } from "@/components/franchise/FranchisePathway";

export const metadata = {
    title: "Franchise Opportunity | Own a Premium Chai Café",
    description: "Join India's fastest growing chai brand. High ROI, low investment, and extensive support. Apply now.",
};

export default function FranchisePage() {
    return (
        <main>
            <Navbar />
            <div style={{ paddingTop: '80px' }}> {/* Offset fixed header */}
                <FranchiseHero />
                <FranchiseBenefits />
                <SupportEcosystem />
                <InvestmentTable />
                <FranchisePathway />
            </div>
            <Footer />
        </main>
    );
}
