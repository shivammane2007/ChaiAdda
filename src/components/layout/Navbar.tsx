"use client";

import * as React from "react";
import Link from "next/link";
import NextImage from "next/image";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { Button } from "@/components/ui/Button";
import styles from "./Navbar.module.css";
import { clsx } from "clsx";

import { usePathname } from "next/navigation";

export function Navbar() {
    const pathname = usePathname();
    const isHeroPage = pathname === "/" || pathname === "/franchise";
    const [isOpen, setIsOpen] = React.useState(false);
    const [isScrolled, setIsScrolled] = React.useState(false);
    const [isVisible, setIsVisible] = React.useState(true);
    const lastScrollY = React.useRef(0);

    React.useEffect(() => {
        let ticking = false;

        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    const currentScrollY = window.pageYOffset || document.documentElement.scrollTop;
                    const delta = currentScrollY - lastScrollY.current;

                    // Update scrolled state for background/blur (earlier threshold)
                    setIsScrolled(currentScrollY > 20);

                    // Show/Hide logic for premium scroll experience
                    if (currentScrollY <= 80) {
                        // Always show at the top 
                        setIsVisible(true);
                    } else if (Math.abs(delta) > 10) { 
                        // Threshold for scroll delta to avoid jitter
                        if (delta > 0) {
                            // Scrolling down -> hide
                            setIsVisible(false);
                            setIsOpen(false); 
                        } else {
                            // Scrolling up -> show
                            setIsVisible(true);
                        }
                    }

                    lastScrollY.current = currentScrollY;
                    ticking = false;
                });
                ticking = true;
            }
        };

        // Use passive listener for better scroll performance
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const isAtTop = !isScrolled;
    const showHeroStyles = isHeroPage && isAtTop;

    return (
        <nav className={clsx(
            styles.navbar, 
            isScrolled && styles.scrolled,
            !isVisible && styles.navHidden,
            showHeroStyles && styles.heroMode
        )}>
            <div className={styles.container}>
                <div className={styles.logoWrapper}>
                    <Link href="/" className={styles.logo}>
                        <div className={styles.logoContainer}>
                            <NextImage
                                src="/images/logo.png"
                                alt="ChaiAdda Logo"
                                width={120}
                                height={60}
                                className={styles.logoImage}
                                priority
                                style={{ width: "auto", height: "auto", maxHeight: "48px" }}
                            />
                        </div>
                    </Link>
                </div>

                {/* Desktop Menu */}
                <div className={styles.desktopMenu}>
                    <Link href="/" className={styles.navLink}>Home</Link>
                    <Link href="/menu" className={styles.navLink}>Menu</Link>
                    <Link href="/story" className={styles.navLink}>Our Story</Link>
                    <Link href="/franchise" className={styles.navLink}>Franchise</Link>
                    <Link href="/contact" className={styles.navLink}>Contact</Link>
                </div>

                <div className={styles.actions}>
                    <ThemeToggle />
                    <div className={styles.desktopAction}>
                        <Button size="sm" href="/franchise">Own a Franchise</Button>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className={styles.menuToggle}
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </div>

                {/* Mobile Menu Overlay */}
                <div className={clsx(styles.mobileMenu, isOpen && styles.open)}>
                    <div className={styles.mobileLinks}>
                        <Link href="/" onClick={() => setIsOpen(false)} className={styles.mobileLink}>Home</Link>
                        <Link href="/menu" onClick={() => setIsOpen(false)} className={styles.mobileLink}>Menu</Link>
                        <Link href="/story" onClick={() => setIsOpen(false)} className={styles.mobileLink}>Our Story</Link>
                        <Link href="/franchise" onClick={() => setIsOpen(false)} className={styles.mobileLink}>Franchise</Link>
                        <Link href="/contact" onClick={() => setIsOpen(false)} className={styles.mobileLink}>Contact</Link>
                        <div className={styles.mobileAction}>
                            <Button className="w-full" href="/franchise" onClick={() => setIsOpen(false)}>Become a Partner</Button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
