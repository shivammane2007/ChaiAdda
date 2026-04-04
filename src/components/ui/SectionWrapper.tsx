import * as React from "react";
import { clsx } from "clsx";

interface SectionWrapperProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode;
    className?: string;
    id?: string;
    fullWidth?: boolean;
}

export function SectionWrapper({
    children,
    className,
    id,
    fullWidth = false,
    ...props
}: SectionWrapperProps) {
    return (
        <section
            id={id}
            className={clsx("section-padding", className)}
            style={{ padding: '80px 0' }}
            {...props}
        >
            <div className={clsx(!fullWidth && "container")}>
                {children}
            </div>
        </section>
    );
}
