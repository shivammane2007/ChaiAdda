"use client";

import React from "react";
import { Coffee, GraduationCap, Users } from "lucide-react";
import styles from "./StoryValues.module.css";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

const VALUES = [
    {
        icon: <Coffee size={32} />,
        title: "Authentic Sourcing",
        text: "We source our leaves directly from the second-flush gardens of Assam, ensuring a bold, bright cup every single time."
    },
    {
        icon: <GraduationCap size={32} />,
        title: "The Art of Patience",
        text: "Good chai cannot be rushed. We slow-brew every batch to ensure the masala and tea leaves dance in perfect harmony."
    },
    {
        icon: <Users size={32} />,
        title: "Community Adda",
        text: "More than a cafe, we are a neighborhood home—a place where conversations flow as freely as our tea."
    }
];

export function StoryValues() {
    return (
        <div className={styles.container}>
            <SectionWrapper>
                <div className={styles.header}>
                    <span className={styles.eyebrow}>Our Foundation</span>
                    <h2 className={styles.heading}>Built on Core Values</h2>
                </div>
                <div className={styles.grid}>
                    {VALUES.map((v, i) => (
                        <div key={i} className={styles.valueCard}>
                            <div className={styles.iconWrapper}>
                                {v.icon}
                            </div>
                            <h3 className={styles.cardTitle}>{v.title}</h3>
                            <p className={styles.cardText}>{v.text}</p>
                        </div>
                    ))}
                </div>
            </SectionWrapper>
        </div>
    );
}
