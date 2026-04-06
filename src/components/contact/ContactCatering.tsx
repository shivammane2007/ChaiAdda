"use client";

import React from "react";
import Image from "next/image";
import styles from "./ContactCatering.module.css";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

export function ContactCatering() {
    return (
        <SectionWrapper className={styles.container}>
            <div className={styles.grid}>
                <div className={styles.textContent}>
                    <span className={styles.eyebrow}>Elevated Events</span>
                    <h2 className={styles.heading}>Bespoke <br /><span className={styles.accent}>Catering Rituals.</span></h2>
                    <p className={styles.description}>
                        Bring the authentic soul of India's tea culture to your next gathering. Whether it's a corporate gala or an intimate rooftop celebration, we curate bespoke tea experiences.
                    </p>
                    <p className={styles.description}>
                        Our master brewers arrive with heritage brewing equipment, hand-ground spices, and our signature blends, transforming any space into a premium boutique "Adda".
                    </p>
                </div>

                <div className={styles.imageContent}>
                    <div className={styles.imageWrapper}>
                        <Image
                            src="/images/contact_catering.png"
                            alt="Luxury Tea Catering"
                            fill
                            className={styles.image}
                        />
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
}
