import { Button } from "@/components/ui/Button";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import styles from "./Hero.module.css";
import Image from "next/image";

export function Hero() {
    return (
        <section className={styles.hero}>
            {/* Background Image Layer */}
            <div className={styles.bgWrapper}>
                <div className={styles.overlay} />
                {/* Placeholder image from Unsplash - Chai / Tea / Dark Mood */}
                <Image
                    src="/images/hero_bg.png"
                    alt="Premium Chai pouring"
                    fill
                    className={styles.bgImage}
                    priority
                    quality={90}
                />
            </div>

            <div className={styles.contentWrapper}>
                <div className={styles.container}>
                    <div className={styles.textContent}>
                        <span className={styles.badge}>Est. 2024 • Authentic Indian Brews</span>
                        <h1 className={styles.headline}>
                            The Soul of India,<br />
                            <span className={styles.highlight}>Brewed for the World.</span>
                        </h1>
                        <p className={styles.subtext}>
                            Experience the perfect fusion of tradition and modernity.
                            Hand-blended spices, premium tea leaves, and an atmosphere that feels like home.
                        </p>
                        <div className={styles.ctaGroup}>
                            <Button size="lg" variant="primary" href="/menu">Order Now</Button>
                            <Button size="lg" variant="outline" href="/franchise" className={styles.outlineBtn}>Become a Partner</Button>
                        </div>

                        <div className={styles.stats}>
                            <div className={styles.statItem}>
                                <span className={styles.statNumber}>50+</span>
                                <span className={styles.statLabel}>Unique Blends</span>
                            </div>
                            <div className={styles.separator} />
                            <div className={styles.statItem}>
                                <span className={styles.statNumber}>100%</span>
                                <span className={styles.statLabel}>Natural Ingredients</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
