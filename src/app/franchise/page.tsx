import dynamic from "next/dynamic";
import { Navbar } from "@/components/layout/Navbar";
import { FranchiseHero } from "@/components/franchise/FranchiseHero";

// Below-fold — code split
const FranchiseBenefits = dynamic(() => import("@/components/franchise/FranchiseBenefits").then(m => ({ default: m.FranchiseBenefits })));
const SupportEcosystem  = dynamic(() => import("@/components/franchise/SupportEcosystem").then(m => ({ default: m.SupportEcosystem })));
const InvestmentTable   = dynamic(() => import("@/components/franchise/InvestmentTable").then(m => ({ default: m.InvestmentTable })));
const FranchisePathway  = dynamic(() => import("@/components/franchise/FranchisePathway").then(m => ({ default: m.FranchisePathway })));
const Footer            = dynamic(() => import("@/components/layout/Footer").then(m => ({ default: m.Footer })));

export const metadata = {
    title: "Franchise Opportunity | Own a Premium ChaiAdda",
    description: "Join India's fastest growing ChaiAdda. High ROI, low investment, and extensive support. Apply now.",
};

export default function FranchisePage() {
    return (
        <main>
            <Navbar />
            <>
                <FranchiseHero />
                <FranchiseBenefits />
                <SupportEcosystem />
                <InvestmentTable />
                <FranchisePathway />
            </>
            <Footer />
        </main>
    );
}

