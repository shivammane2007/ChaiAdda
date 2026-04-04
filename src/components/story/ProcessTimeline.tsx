import { SectionWrapper } from "@/components/ui/SectionWrapper";
import styles from "./ProcessTimeline.module.css";
import { Leaf, Flame, Droplet, CheckCircle } from "lucide-react";

export function ProcessTimeline() {
    const steps = [
        {
            icon: <Leaf />,
            title: "Sourcing",
            desc: "Hand-picked tea leaves from the finest estates in Assam during the second flush season."
        },
        {
            icon: <Flame />,
            title: "Blending",
            desc: "Leaves are mixed with our secret masala blend of cardamom, cloves, ginger, and cinnamon."
        },
        {
            icon: <Droplet />,
            title: "Brewing",
            desc: "Slow-brewed at precise temperatures to extract maximum flavor and aroma."
        },
        {
            icon: <CheckCircle />,
            title: "Quality Check",
            desc: "Every batch is tasted by our Master Brewer before being served."
        }
    ];

    return (
        <SectionWrapper className={styles.processSection}>
            <div className={styles.header}>
                <h2 className={styles.heading}>The Art of the Perfect Cup</h2>
                <p className={styles.subtext}>It takes time to make something timeless.</p>
            </div>

            <div className={styles.timeline}>
                <div className={styles.line} />
                {steps.map((step, index) => (
                    <div key={index} className={styles.step}>
                        <div className={styles.iconWrapper}>
                            {step.icon}
                        </div>
                        <div className={styles.content}>
                            <h3 className={styles.stepTitle}>{step.title}</h3>
                            <p className={styles.stepDesc}>{step.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </SectionWrapper>
    );
}
