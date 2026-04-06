import Link from "next/link";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import styles from "./Footer.module.css";
import { Button } from "@/components/ui/Button";

export function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.topSection}>
                    <div className={styles.brandColumn}>
                        <Link href="/" className={styles.logo}>
                            CHAI<span className={styles.dot}>.</span>
                        </Link>
                        <p className={styles.tagline}>
                            Crafting stories, one cup at a time. Authentically Indian, globally loved.
                        </p>
                        <div className={styles.socials}>
                            <Link href="#" className={styles.socialIcon} aria-label="Instagram"><Instagram size={20} /></Link>
                            <Link href="#" className={styles.socialIcon} aria-label="Facebook"><Facebook size={20} /></Link>
                            <Link href="#" className={styles.socialIcon} aria-label="Twitter"><Twitter size={20} /></Link>
                            <Link href="#" className={styles.socialIcon} aria-label="LinkedIn"><Linkedin size={20} /></Link>
                        </div>
                    </div>

                    <div className={styles.linksColumn}>
                        <h4 className={styles.columnTitle}>Explore</h4>
                        <ul className={styles.linkList}>
                            <li><Link href="/" className={styles.link}>Home</Link></li>
                            <li><Link href="/menu" className={styles.link}>Our Menu</Link></li>
                            <li><Link href="/story" className={styles.link}>Brand Story</Link></li>
                            <li><Link href="/store-locator" className={styles.link}>Find a Store</Link></li>
                        </ul>
                    </div>

                    <div className={styles.linksColumn}>
                        <h4 className={styles.columnTitle}>Company</h4>
                        <ul className={styles.linkList}>
                            <li><Link href="/franchise" className={styles.link}>Franchise</Link></li>
                            <li><Link href="/careers" className={styles.link}>Careers</Link></li>
                            <li><Link href="/contact" className={styles.link}>Contact Us</Link></li>
                            <li><Link href="/press" className={styles.link}>Press</Link></li>
                        </ul>
                    </div>

                    <div className={styles.newsletterColumn}>
                        <h4 className={styles.columnTitle}>Join our Journey</h4>
                        <p className={styles.newsletterText}>Get updates on new blends and store openings.</p>
                        <form className={styles.form}>
                            <input 
                                type="email" 
                                placeholder="Your email address" 
                                className={styles.input}
                                suppressHydrationWarning
                            />
                            <Button type="submit" variant="primary" size="sm">Subscribe</Button>
                        </form>
                    </div>
                </div>

                <div className={styles.bottomSection}>
                    <p className={styles.copyright} suppressHydrationWarning>© {new Date().getFullYear()} CHAI Brand. All rights reserved.</p>
                    <div className={styles.legalLinks}>
                        <Link href="/privacy" className={styles.legalLink}>Privacy Policy</Link>
                        <Link href="/terms" className={styles.legalLink}>Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
