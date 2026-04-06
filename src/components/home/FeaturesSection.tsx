"use client";

import { useEffect, useRef } from "react";
import styles from "./FeaturesSection.module.css";
import { Coffee, Leaf, Rocket, ShieldCheck } from "lucide-react";

export function FeaturesSection() {
    const bgRef = useRef<HTMLDivElement>(null);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        let ticking = false;

        const updateParallax = () => {
            if (!sectionRef.current || !bgRef.current) return;
            
            const section = sectionRef.current;
            const bg = bgRef.current;
            const rect = section.getBoundingClientRect();
            const scrollPercent = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
            
            if (scrollPercent >= 0 && scrollPercent <= 1) {
                // Parallax move: -50px to 50px
                const yPos = (scrollPercent - 0.5) * 80;
                // Subtle zoom: 1.1 to 1.2
                const scale = 1.1 + (scrollPercent * 0.1); 
                
                bg.style.transform = `translate3d(0, ${yPos}px, 0) scale(${scale})`;
            }
            ticking = false;
        };

        const onScroll = () => {
            if (!ticking) {
                requestAnimationFrame(updateParallax);
                ticking = true;
            }
        };

        // Check if on mobile to skip parallax for performance if needed
        const isMobile = window.innerWidth <= 768;
        if (!isMobile) {
            window.addEventListener("scroll", onScroll, { passive: true });
        } else {
            // Static scale for mobile
            if (bgRef.current) bgRef.current.style.transform = "scale(1.1)";
        }

        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const features = [
        { icon: <Coffee />, title: "Authentic Taste", desc: "Traditional brewing methods for the perfect cup." },
        { icon: <Leaf />, title: "Natural Ingredients", desc: "Sourced directly from the finest tea gardens." },
        { icon: <Rocket />, title: "Fast Growing Brand", desc: "Expanding rapidly across the globe." },
        { icon: <ShieldCheck />, title: "Strong Support System", desc: "Unmatched operational and marketing support." },
    ];

    return (
        <section ref={sectionRef} className={styles.featuresSection}>
            <div ref={bgRef} className={styles.parallaxBg} />
            <div className={styles.overlay} />
            
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Why Choose Chai Café?</h2>
                    <p className={styles.subtitle}>Bringing the premium Indian heritage to your cup with every sip.</p>
                </div>

                <div className={styles.grid}>
                    {features.map((feature, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.iconWrapper}>{feature.icon}</div>
                            <h3 className={styles.cardTitle}>{feature.title}</h3>
                            <p className={styles.cardDesc}>{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
