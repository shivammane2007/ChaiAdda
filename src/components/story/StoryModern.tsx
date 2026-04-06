"use client";

import React from "react";
import Image from "next/image";
import styles from "./StoryModern.module.css";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

export function StoryModern() {
    return (
        <SectionWrapper className={styles.container}>
            <div className={styles.grid}>
                <div className={styles.imageContent}>
                    <div className={styles.imageWrapper}>
                        <Image
                            src="/images/modern_chai.png"
                            alt="The Modern Ritual"
                            fill
                            className={styles.image}
                            sizes="(max-width: 768px) 100vw, 50vw"
                            loading="lazy"
                        />
                    </div>
                </div>

                <div className={styles.textContent}>
                    <span className={styles.eyebrow}>Modern Traditions</span>
                    <h2 className={styles.heading}>The Ritual, <br /><span className={styles.accent}>Reimagined.</span></h2>
                    <p className={styles.description}>
                        We believe that while technology and lifestyles change, the human need for connection and a perfect cup of tea remains constant.
                    </p>
                    <p className={styles.description}>
                        Our modern cafes are designed as contemporary "Addas"—urban sanctuaries where the slow pace of hand-brewed chai meets the speed of today's world.
                    </p>
                    <p className={styles.description}>
                        With minimalist design, ambient acoustics, and ergonomic comfort, we’ve created a space where 40 years of heritage feels right at home in the 21st century.
                    </p>
                </div>
            </div>
        </SectionWrapper>
    );
}
