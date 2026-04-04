import { SectionWrapper } from "@/components/ui/SectionWrapper";
import styles from "./InvestmentTable.module.css";
import { Button } from "@/components/ui/Button";

export function InvestmentTable() {
    return (
        <SectionWrapper id="models" className={styles.section}>
            <div className={styles.header}>
                <h2 className={styles.title}>Investment Models</h2>
                <p className={styles.subtitle}>Choose the model that fits your location and budget.</p>
            </div>

            <div className={styles.grid}>
                {/* Model 1: Kiosk */}
                <div className={styles.card}>
                    <div className={styles.cardHeader}>
                        <h3 className={styles.modelName}>Express Kiosk</h3>
                        <p className={styles.modelDesc}>Perfect for malls & busy streets</p>
                    </div>
                    <div className={styles.price}>
                        <span className={styles.currency}>₹</span>10-12 <span className={styles.unit}>Lakhs</span>
                    </div>
                    <ul className={styles.features}>
                        <li><span className={styles.check}>✓</span> Area: 100-200 sq.ft</li>
                        <li><span className={styles.check}>✓</span> ROI: 12-14 Months</li>
                        <li><span className={styles.check}>✓</span> Full Menu Support</li>
                    </ul>
                    <div className={styles.cta}>
                        <Button variant="outline" href="#inquiry-form" className="w-full">Select Plan</Button>
                    </div>
                </div>

                {/* Model 2: Café (Featured) */}
                <div className={`${styles.card} ${styles.featured}`}>
                    <div className={styles.featuredBadge}>Most Popular</div>
                    <div className={styles.cardHeader}>
                        <h3 className={styles.modelName}>Signature Café</h3>
                        <p className={styles.modelDesc}>The complete dine-in experience</p>
                    </div>
                    <div className={styles.price}>
                        <span className={styles.currency}>₹</span>18-22 <span className={styles.unit}>Lakhs</span>
                    </div>
                    <ul className={styles.features}>
                        <li><span className={styles.check}>✓</span> Area: 500-800 sq.ft</li>
                        <li><span className={styles.check}>✓</span> ROI: 15-18 Months</li>
                        <li><span className={styles.check}>✓</span> Premium Interiors</li>
                    </ul>
                    <div className={styles.cta}>
                        <Button variant="primary" href="#inquiry-form" className="w-full">Select Plan</Button>
                    </div>
                </div>

                {/* Model 3: Lounge */}
                <div className={styles.card}>
                    <div className={styles.cardHeader}>
                        <h3 className={styles.modelName}>Premium Lounge</h3>
                        <p className={styles.modelDesc}>High-street luxury destination</p>
                    </div>
                    <div className={styles.price}>
                        <span className={styles.currency}>₹</span>30+ <span className={styles.unit}>Lakhs</span>
                    </div>
                    <ul className={styles.features}>
                        <li><span className={styles.check}>✓</span> Area: 1000+ sq.ft</li>
                        <li><span className={styles.check}>✓</span> ROI: 18-24 Months</li>
                        <li><span className={styles.check}>✓</span> Extended Food Menu</li>
                    </ul>
                    <div className={styles.cta}>
                        <Button variant="outline" href="#inquiry-form" className="w-full">Select Plan</Button>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
}
