"use client";

import * as React from "react";
import Link from "next/link";
import styles from "./Button.module.css";
import { clsx } from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "ghost" | "link";
    size?: "sm" | "md" | "lg";
    href?: string;
    className?: string;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", href, children, ...props }, ref) => {
        const rootClassName = clsx(
            styles.button,
            styles[variant],
            styles[size],
            className
        );

        if (href) {
            return (
                <Link href={href} className={rootClassName}>
                    {children}
                </Link>
            );
        }

        return (
            <button ref={ref} className={rootClassName} {...props}>
                {children}
            </button>
        );
    }
);

Button.displayName = "Button";
