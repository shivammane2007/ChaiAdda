"use client";

import React from "react";
import { Layout, Truck, GraduationCap, Megaphone } from "lucide-react";
import styles from "./SupportEcosystem.module.css";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

const SUPPORT_ITEMS = [
    {
        icon: <Layout size={32} />,
        title: "Boutique Store Design",
        text: "Our architects lead the design process to ensure every cafe reflects our high-end, contemporary Indian aesthetic."
    },
    {
        icon: <Truck size={32} />,
        title: "Seamless Sourcing",
        text: "Direct supply chain from the gardens of Assam to your doorstep, ensuring quality and cost-efficiency."
    },
    {
        icon: <GraduationCap size={32} />,
        title: "Training Academy",
        text: "Comprehensive training for your staff and master-brewers to maintain our 40-year legacy of taste."
    },
    {
        icon: <Megaphone size={32} />,
        title: "360° Marketing",
        text: "Dedicated digital and local marketing support to drive footfall and build brand presence in your city."
    }
];

export function SupportEcosystem() {
    return (
        <div className={styles.container}>
            <SectionWrapper>
                <div className={styles.header}>
                    <span className={styles.eyebrow}>Partner Support</span>
                    <h2 className={styles.heading}>Our Support Ecosystem</h2>
                </div>
                <div className={styles.grid}>
                    {SUPPORT_ITEMS.map((item, index) => (
                        <div key={index} className={styles.supportCard}>
                            <div className={styles.iconWrapper}>
                                {item.icon}
                            </div>
                            <h3 className={styles.cardTitle}>{item.title}</h3>
                            <p className={styles.cardText}>{item.text}</p>
                        </div>
                    ))}
                </div>
            </SectionWrapper>
        </div>
    );
}
