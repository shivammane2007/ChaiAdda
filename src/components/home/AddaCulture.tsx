"use client";

import React from "react";
import Image from "next/image";
import styles from "./AddaCulture.module.css";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

export function AddaCulture() {
    return (
        <SectionWrapper className={styles.container}>
            <div className={styles.grid}>
                <div className={styles.textContent}>
                    <span className={styles.eyebrow}>Our Philosophy</span>
                    <h2 className={styles.heading}>The Ritual of <br /><span className={styles.accent}>Connection.</span></h2>
                    <p className={styles.description}>
                        At ChaiAdda, we believe that the best conversations happen over a steaming cup. Our cafés are designed as modern-day "Addas"—vibrant spaces where time slows down and community thrives.
                    </p>
                    <p className={styles.description}>
                        From the carefully sourced tea leaves to the rhythmic sound of copper pots, every element is a tribute to the 40-year heritage of Indian tea culture, reimagined for the contemporary world.
                    </p>
                </div>

                <div className={styles.imageContent}>
                    <div className={styles.imageWrapper}>
                        <Image
                            src="/images/adda_culture.png"
                            alt="The Adda Experience"
                            fill
                            className={styles.image}
                            sizes="(max-width: 768px) 100vw, 50vw"
                            loading="lazy"
                        />
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
}
