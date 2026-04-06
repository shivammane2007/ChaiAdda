"use client";

import React from "react";
import { Leaf, Flame, Sparkles, MapPin } from "lucide-react";
import styles from "./MenuPhilosophy.module.css";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

const FEATURES = [
    {
        icon: <Leaf size={28} />,
        title: "Single Origin",
        description: "Assam's finest tea leaves, sourced directly from sustainable gardens for pure, bold flavor."
    },
    {
        icon: <Flame size={28} />,
        title: "Slow Steeped",
        description: "Traditionally brewed in small batches to extract the true essence of every spice and leaf."
    },
    {
        icon: <Sparkles size={28} />,
        title: "7-Spice Secret",
        description: "A generational blend of ginger, cardamom, and secret spices hand-ground every morning."
    },
    {
        icon: <MapPin size={28} />,
        title: "Locally Sourced",
        description: "Farm-fresh dairy and artisanal ingredients sourced from local partners in every city."
    }
];

export function MenuPhilosophy() {
    return (
        <SectionWrapper style={{ paddingTop: '0', paddingBottom: '40px' }}>
            <div className={styles.container}>
                {FEATURES.map((item, index) => (
                    <div key={index} className={styles.feature}>
                        <div className={styles.iconWrapper}>
                            {item.icon}
                        </div>
                        <h3 className={styles.title}>{item.title}</h3>
                        <p className={styles.description}>{item.description}</p>
                    </div>
                ))}
            </div>
        </SectionWrapper>
    );
}
