"use client";

import React from "react";
import styles from "./FranchisePathway.module.css";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

const STEPS = [
    {
        title: "Initial Inquiry",
        text: "Submit your inquiry form. Our team will reach out within 48 hours for a preliminary discussion."
    },
    {
        title: "The Interview",
        text: "A one-on-one discovery meeting with our founders to align on the vision and growth metrics."
    },
    {
        title: "Site Selection",
        text: "Assistance in identifying and verifying high-footfall locations in your target city."
    },
    {
        title: "Training & Design",
        text: "Complete master-brewer certification for your staff and boutique cafe design finalization."
    },
    {
        title: "Grand Opening",
        text: "Launching your cafe with local marketing blitz and support from our launch team."
    }
];

export function FranchisePathway() {
    return (
        <div className={styles.container}>
            <SectionWrapper>
                <div className={styles.header}>
                    <span className={styles.eyebrow}>Becoming a Partner</span>
                    <h2 className={styles.heading}>The Franchise Pathway</h2>
                </div>
                <div className={styles.pathway}>
                    {STEPS.map((step, index) => (
                        <div key={index} className={styles.step}>
                            <div className={styles.number}>
                                {index + 1}
                            </div>
                            <div className={styles.content}>
                                <h3 className={styles.stepTitle}>{step.title}</h3>
                                <p className={styles.stepText}>{step.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </SectionWrapper>
        </div>
    );
}
