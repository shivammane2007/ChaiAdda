import { SectionWrapper } from "@/components/ui/SectionWrapper";
import styles from "./FranchiseBenefits.module.css";
import { TrendingUp, Users, Coffee, Settings } from "lucide-react";

const benefits = [
    {
        icon: <TrendingUp size={32} />,
        title: "High ROI Model",
        description: "Proven business models with quick break-even periods and healthy profit margins."
    },
    {
        icon: <Settings size={32} />,
        title: "End-to-End Support",
        description: "From site selection to staff training and grand opening, we guide you every step."
    },
    {
        icon: <Coffee size={32} />,
        title: "Standardized Taste",
        description: "Our proprietary spice blends ensure every cup tastes exactly like the original."
    },
    {
        icon: <Users size={32} />,
        title: "Marketing & Branding",
        description: "National level marketing campaigns and digital presence management."
    }
];

export function FranchiseBenefits() {
    return (
        <SectionWrapper id="benefits">
            <div className={styles.header}>
                <h2 className={styles.title}>Why Choose Us?</h2>
                <p className={styles.subtitle}>We don't just sell tea; we build sustainable businesses.</p>
            </div>

            <div className={styles.grid}>
                {benefits.map((item, index) => (
                    <div key={index} className={styles.card}>
                        <div className={styles.iconWrapper}>{item.icon}</div>
                        <h3 className={styles.cardTitle}>{item.title}</h3>
                        <p className={styles.cardDesc}>{item.description}</p>
                    </div>
                ))}
            </div>
        </SectionWrapper>
    );
}
