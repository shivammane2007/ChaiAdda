import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Button } from "@/components/ui/Button";
import styles from "./FranchiseTeaser.module.css";
import Image from "next/image";

export function FranchiseTeaser() {
    return (
        <SectionWrapper className={styles.franchiseSection} fullWidth>
            <div className={styles.container}>
                <div className={styles.bgOverlay} />
                <Image
                    src="/images/franchise_interior.png"
                    alt="Business meeting in cafe"
                    fill
                    className={styles.bgImage}
                />

                <div className={styles.content}>
                    <div className={styles.textContent}>
                        <span className={styles.badge}>Franchise Opportunity</span>
                        <h2 className={styles.title}>Own a Piece of India’s<br />Chai Revolution</h2>
                        <p className={styles.description}>
                            Join a rapidly expanding premium café brand. We offer comprehensive support,
                            robust supply chains, and a business model built for scale.
                        </p>
                        <div className={styles.actions}>
                            <Button size="lg" variant="primary" href="/franchise">Download Franchise Brochure</Button>
                            <Button size="lg" variant="outline" href="/franchise" className={styles.outlineBtn}>Learn More</Button>
                        </div>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
}
