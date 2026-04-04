"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import styles from "./ThemeToggle.module.css";

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = React.useState(false);

    // Avoid hydration mismatch
    React.useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return <div className={styles.togglePlaceholder} />; // Prevent layout shift
    }

    return (
        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className={styles.toggleBtn}
            aria-label="Toggle theme"
        >
            <div className={styles.iconWrapper}>
                <Sun className={`${styles.icon} ${styles.sun}`} />
                <Moon className={`${styles.icon} ${styles.moon}`} />
            </div>
        </button>
    );
}
