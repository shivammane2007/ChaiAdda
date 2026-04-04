import { SectionWrapper } from "@/components/ui/SectionWrapper";
import styles from "./Philosophy.module.css";
import Image from "next/image";

export function Philosophy() {
    return (
        <SectionWrapper className={styles.philosophySection}>
            <div className={styles.grid}>
                <div className={styles.textColumn}>
                    <span className={styles.subtitle}>Our Philosophy</span>
                    <h2 className={styles.heading}>More than just Tea.<br />It’s a <span className={styles.accent}>Ritual.</span></h2>
                    <p className={styles.description}>
                        In every street corner of India, chai is not just a drink—it’s a conversation starter, a break from chaos, and a moment of connection.
                    </p>
                    <div className={styles.features}>
                        <div className={styles.feature}>
                            <h3 className={styles.featureTitle}>Hand-Picked</h3>
                            <p className={styles.featureText}>Leaves sourced from the finest estates in Assam & Darjeeling.</p>
                        </div>
                        <div className={styles.feature}>
                            <h3 className={styles.featureTitle}>Slow Brewed</h3>
                            <p className={styles.featureText}>Traditional brewing for full-bodied flavor and authentic aroma.</p>
                        </div>
                        <div className={styles.feature}>
                            <h3 className={styles.featureTitle}>Spiced Right</h3>
                            <p className={styles.featureText}>Secret masala blends passed down through generations.</p>
                        </div>
                    </div>
                </div>

                <div className={styles.imageColumn}>
                    <div className={styles.imageWrapper}>
                        <Image
                            src="/images/philosophy_prep.png"
                            alt="Authentic Chai preparation"
                            width={600}
                            height={800}
                            className={styles.image}
                        />
                        {/* Decorative Element */}
                        <div className={styles.circleGraphic} />
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
}
