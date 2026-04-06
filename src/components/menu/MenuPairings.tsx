"use client";

import React from "react";
import Image from "next/image";
import styles from "./MenuPairings.module.css";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { ArrowRight } from "lucide-react";

const PAIRINGS = [
    {
        id: 1,
        title: "The Heritage Duo",
        subtitle: "Signature Masala + Ghee-Kismis Buns",
        desc: "Our legendary spicy brew paired with velvety buttered buns for the ultimate morning ritual.",
        image1: "/images/masala_chai.png",
        image2: "/images/bun_maska.png",
        tag: "Classic"
    },
    {
        id: 2,
        title: "Kashmiri Bliss",
        subtitle: "Saffron Gold + Rose Cardamom",
        desc: "A royal aromatic journey. The richness of saffron meets the floral notes of dried rose petals.",
        image1: "/images/saffron_gold.png",
        image2: "/images/rose_cardamom.png",
        tag: "Premium"
    }
];

export function MenuPairings() {
    return (
        <SectionWrapper className={styles.section}>
            <div className={styles.header}>
                <span className={styles.eyebrow}>Curated Combinations</span>
                <h2 className={styles.title}>Perfect Pairings</h2>
            </div>

            <div className={styles.grid}>
                {PAIRINGS.map((pairing) => (
                    <div key={pairing.id} className={styles.card}>
                        <div className={styles.visuals}>
                            <div className={styles.imageBox}>
                                <Image 
                                    src={pairing.image1} 
                                    alt="Pairing Item 1" 
                                    fill 
                                    className={styles.image}
                                    sizes="(max-width: 768px) 40vw, 20vw"
                                    loading="lazy"
                                />
                            </div>
                            <div className={styles.plus}>+</div>
                            <div className={styles.imageBox}>
                                <Image 
                                    src={pairing.image2} 
                                    alt="Pairing Item 2" 
                                    fill 
                                    className={styles.image}
                                    sizes="(max-width: 768px) 40vw, 20vw"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                        <div className={styles.content}>
                            <div className={styles.tag}>{pairing.tag}</div>
                            <h3 className={styles.cardTitle}>{pairing.title}</h3>
                            <h4 className={styles.cardSubtitle}>{pairing.subtitle}</h4>
                            <p className={styles.cardDesc}>{pairing.desc}</p>
                            <button className={styles.cta}>
                                Explore Pairing <ArrowRight size={16} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </SectionWrapper>
    );
}
