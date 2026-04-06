"use client";

import React from 'react';
import type { ComponentProps, ReactNode } from 'react';
import Link from 'next/link';
import NextImage from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { 
    Facebook, 
    Instagram, 
    Twitter, 
    Linkedin, 
    Youtube,
    Sparkles
} from 'lucide-react';
import styles from "./Footer.module.css";
import { Button } from "@/components/ui/Button";

interface FooterLink {
    title: string;
    href: string;
    icon?: React.ComponentType<{ className?: string }>;
}

interface FooterSection {
    label: string;
    links: FooterLink[];
}

const FOOTER_LINKS: FooterSection[] = [
    {
        label: 'Our Menu',
        links: [
            { title: 'Classic Chai', href: '/menu?cat=Classic' },
            { title: 'Signature Brews', href: '/menu?cat=Signature' },
            { title: 'Artisanal Snacks', href: '/menu?cat=Snacks' },
            { title: 'Saffron Gold', href: '/menu?cat=Premium' },
        ],
    },
    {
        label: 'Brand',
        links: [
            { title: 'Our Story', href: '/story' },
            { title: 'Heritage', href: '/story#heritage' },
            { title: 'Sustainability', href: '/story#sustainability' },
            { title: 'Press', href: '/press' },
        ],
    },
    {
        label: 'Franchise',
        links: [
            { title: 'Pathway', href: '/franchise#pathway' },
            { title: 'Support', href: '/franchise#support' },
            { title: 'FAQ', href: '/franchise#faq' },
            { title: 'Application', href: '/franchise#apply' },
        ],
    },
    {
        label: 'Social',
        links: [
            { title: 'Instagram', href: '#', icon: Instagram },
            { title: 'Facebook', href: '#', icon: Facebook },
            { title: 'Youtube', href: '#', icon: Youtube },
            { title: 'LinkedIn', href: '#', icon: Linkedin },
        ],
    },
];

export function Footer() {
    return (
        <footer className={styles.footer}>
            {/* Centered glow line */}
            <div className={styles.glow} />

            <div className={styles.grid}>
                <AnimatedContainer className={styles.brandCol}>
                    <Link href="/" className={styles.logo}>
                        <div className={styles.logoContainer}>
                            <NextImage
                                src="/images/logo.png"
                                alt="ChaiAdda Logo"
                                fill
                                className={styles.logoImage}
                                priority
                                sizes="140px"
                            />
                        </div>
                    </Link>
                    <p className={styles.tagline} style={{ opacity: 0.7, fontSize: '14px', lineHeight: 1.6 }}>
                        Crafting stories, one cup at a time. Heritage-inspired, contemporary-brewed.
                    </p>
                    <p className={styles.copyright}>
                        © {new Date().getFullYear()} ChaiAdda. All rights reserved.
                    </p>
                </AnimatedContainer>

                <div className={styles.linkGrid}>
                    {FOOTER_LINKS.map((section, index) => (
                        <AnimatedContainer key={section.label} delay={0.1 + index * 0.1}>
                            <div>
                                <h3 className={styles.sectionLabel}>{section.label}</h3>
                                <ul className={styles.linkList}>
                                    {section.links.map((link) => (
                                        <li key={link.title}>
                                            <Link
                                                href={link.href}
                                                className={styles.linkItem}
                                            >
                                                {link.icon && <link.icon className={styles.socialIcon} />}
                                                {link.title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </AnimatedContainer>
                    ))}
                </div>
            </div>

            {/* Re-adding Newsletter as it's key for the brand identity */}
            <AnimatedContainer className={styles.newsletter} delay={0.6}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Sparkles size={18} className="text-gold" />
                    <h4 className={styles.newsletterHeading}>Join our Journey</h4>
                </div>
                <p style={{ opacity: 0.6, fontSize: '14px', marginBottom: '8px' }}>Get updates on new blends and store openings.</p>
                <form className={styles.newsletterForm}>
                    <input 
                        type="email" 
                        placeholder="Your email address" 
                        className={styles.input}
                        suppressHydrationWarning
                    />
                    <Button type="submit" variant="primary" size="sm">Subscribe</Button>
                </form>
            </AnimatedContainer>
        </footer>
    );
}

type ViewAnimationProps = {
    delay?: number;
    className?: ComponentProps<typeof motion.div>['className'];
    children: ReactNode;
};

function AnimatedContainer({ className, delay = 0.1, children }: ViewAnimationProps) {
    const shouldReduceMotion = useReducedMotion();

    if (shouldReduceMotion) {
        return <div className={className}>{children}</div>;
    }

    return (
        <motion.div
            initial={{ filter: 'blur(4px)', translateY: -8, opacity: 0 }}
            whileInView={{ filter: 'blur(0px)', translateY: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay, duration: 0.8 }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
