"use client";

import React from "react";
import styles from "./MenuBanner.module.css";
import { clsx } from "clsx";

const TAGLINES = [
    "Authentic Masala Chai",
    "Hand-picked Tea Leaves",
    "Traditional Brewed Classics",
    "Artisan Indian Snacks",
    "The Soul of India in Every Sip",
    "Crafted with Passion & Tradition"
];

export function MenuBanner() {
    // Duplicate for seamless infinite scroll
    const marqueeItems = [...TAGLINES, ...TAGLINES];

    return (
        <div className={styles.bannerWrapper}>
            <div className={styles.marquee}>
                <div className={styles.marqueeGroup}>
                    {marqueeItems.map((text, index) => (
                        <div key={index} className={styles.item}>
                            <span className={styles.dot}></span>
                            {text}
                        </div>
                    ))}
                </div>
                <div className={styles.marqueeGroup}>
                    {marqueeItems.map((text, index) => (
                        <div key={index} className={styles.item}>
                            <span className={styles.dot}></span>
                            {text}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
