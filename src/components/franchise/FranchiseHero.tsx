import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Button } from "@/components/ui/Button";
import styles from "./FranchiseHero.module.css";
import Image from "next/image";

export function FranchiseHero() {
    return (
        <div className={styles.hero}>
            <div className={styles.bgWrapper}>
                <div className={styles.overlay} />
                <Image
                    src="https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?q=80&w=2670&auto=format&fit=crop"
                    alt="Busy modern chai cafe"
                    fill
                    className={styles.bgImage}
                    priority
                />
            </div>

            <div className={styles.content}>
                <div className={styles.container}>
                    <span className={styles.badge}>Business Opportunity</span>
                    <h1 className={styles.headline}>Partner with India’s<br />Fastest Growing Chai Brand</h1>
                    <p className={styles.subtext}>
                        Join a network of successful entrepreneurs. Low investment, high ROI, and a brand that customers love.
                    </p>
                    <div className={styles.actions}>
                        <Button variant="primary" size="lg" href="#inquiry-form">Enquire Now</Button>
                        <Button variant="outline" size="lg" href="#models">View Models</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
