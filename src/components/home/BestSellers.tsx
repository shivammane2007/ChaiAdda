"use client";

import React from "react";
import Image from "next/image";
import styles from "./BestSellers.module.css";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

const BLENDS = [
    {
        id: 1,
        title: "Signature Masala",
        desc: "Our legendary 7-spice secret blend, slow-brewed to perfection.",
        price: "$4.50",
        image: "/images/masala_chai.png",
        badge: "Bestseller"
    },
    {
        id: 2,
        title: "Saffron Gold",
        desc: "Kashmiri saffron and crushed almonds for a royal afternoon.",
        price: "$6.00",
        image: "/images/saffron_gold.png",
        badge: "Premium"
    },
    {
        id: 3,
        title: "Cardamom Bliss",
        desc: "Hand-picked green cardamom pods from the hills of Munnar.",
        price: "$4.50",
        image: "/images/rose_cardamom.png",
        badge: "Classic"
    },
    {
        id: 4,
        title: "Ghee-Kismis Buns",
        desc: "Velvety buttered buns, the ultimate companion to any brew.",
        price: "$5.50",
        image: "/images/bun_maska.png",
        badge: "Must Try"
    }
];

export function BestSellers() {
    return (
        <SectionWrapper className={styles.section}>
            <div className={styles.header}>
                <span className={styles.eyebrow}>The Signature Collection</span>
                <h2 className={styles.title}>Most Loved Blends</h2>
            </div>

            <div className={styles.grid}>
                {BLENDS.map((blend) => (
                    <div key={blend.id} className={styles.card}>
                        <div className={styles.imageWrapper}>
                            {blend.badge && <span className={styles.badge}>{blend.badge}</span>}
                            <Image
                                src={blend.image}
                                alt={blend.title}
                                fill
                                className={styles.image}
                            />
                        </div>
                        <div className={styles.cardContent}>
                            <h3 className={styles.cardTitle}>{blend.title}</h3>
                            <p className={styles.cardDesc}>{blend.desc}</p>
                            <span className={styles.price}>{blend.price}</span>
                        </div>
                    </div>
                ))}
            </div>
        </SectionWrapper>
    );
}
