import { SectionWrapper } from "@/components/ui/SectionWrapper";
import styles from "./StoryHero.module.css";
import Image from "next/image";

export function StoryHero() {
    return (
        <SectionWrapper id="story-hero" className={styles.hero} fullWidth>
            <div className={styles.container}>
                <div className={styles.imageCol}>
                    {/* Sepia tone or B&W for heritage feel */}
                    <div className={styles.imageWrapper}>
                        <Image
                            src="/images/heritage_tea_garden.png"
                            alt="Tea estate founder"
                            fill
                            className={styles.heroImage}
                        />
                        <div className={styles.imageOverlay} />
                    </div>
                </div>

                <div className={styles.textCol}>
                    <span className={styles.eyebrow}>Our Heritage</span>
                    <h1 className={styles.title}>From the Gardens of Assam <br /> to Your Cup.</h1>
                    <p className={styles.narrative}>
                        It started in 1985 with a small tea stall in Mumbai. Our founder, Mr. Sharma, believed that chai wasn't just a drink—it was the fuel of the nation.
                    </p>
                    <p className={styles.narrative}>
                        Decades later, we still brew every cup with the same patience, the same secret spice blend, and the same love. We are modernizing the experience, but keeping the soul 100% Desi.
                    </p>

                    <div className={styles.quoteBox}>
                        <p className={styles.quote}>"Good chai can pause time. Great chai can start a revolution."</p>
                        <span className={styles.author}>— Founder</span>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
}
