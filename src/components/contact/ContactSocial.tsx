"use client";

import React from "react";
import Image from "next/image";
import styles from "./ContactSocial.module.css";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

const SOCIAL_POSTS = [
    {
        image: "/images/masala_chai.png",
        label: "The Perfect Pour"
    },
    {
        image: "/images/bun_maska.png",
        label: "Authentic Pairings"
    },
    {
        image: "/images/modern_chai.png",
        label: "The Modern Adda"
    }
];

export function ContactSocial() {
    return (
        <SectionWrapper className={styles.container}>
            <div className={styles.header}>
                <span className={styles.eyebrow}>Our Community</span>
                <h2 className={styles.heading}>Follow the Journey</h2>
            </div>

            <div className={styles.grid}>
                {SOCIAL_POSTS.map((post, index) => (
                    <div key={index} className={styles.socialCard}>
                        <Image
                            src={post.image}
                            alt={post.label}
                            fill
                            className={styles.image}
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            loading="lazy"
                        />
                        <div className={styles.overlay}>
                            <span className={styles.text}>{post.label}</span>
                        </div>
                    </div>
                ))}
            </div>

            <div className={styles.footer}>
                <span className={styles.handle}>@ChaiAddaOfficial</span>
            </div>
        </SectionWrapper>
    );
}
